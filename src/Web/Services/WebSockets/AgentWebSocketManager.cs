using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Web.Services.WebSockets
{
    public abstract class AgentWebSocketManager
    {
        protected AgentWebSocketConnector AgentWebSocketConnector { get; set; }

        public AgentWebSocketManager(AgentWebSocketConnector webSocketConnector)
        {
            AgentWebSocketConnector = webSocketConnector;
        }

        public virtual async Task OnConnected(WebSocket socket)
        {
            AgentWebSocketConnector.AddSocket(socket);
        }

        public virtual async Task OnDisconnected(WebSocket socket)
        {
            await AgentWebSocketConnector.RemoveSocket(AgentWebSocketConnector.GetId(socket));
        }

        public async Task SendMessageAsync(WebSocket socket, string message)
        {
            if (socket.State != WebSocketState.Open)
                return;
            await socket.SendAsync(buffer: new ArraySegment<byte>(array: Encoding.ASCII.GetBytes(message),
                offset: 0, count: message.Length), messageType: WebSocketMessageType.Text, endOfMessage: true,
                cancellationToken: CancellationToken.None);
        }

        public async Task SendMessageToAllAsync(string message)
        {
            foreach(var pair in AgentWebSocketConnector.GetAll())
            {
                if (pair.Value.State == WebSocketState.Open)
                    await SendMessageAsync(pair.Value, message);
            }
        }
        public abstract Task ReceiveAsync(WebSocket socket, WebSocketReceiveResult result, byte[] buffer);
    }
}
