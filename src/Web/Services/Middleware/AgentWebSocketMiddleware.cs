using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;
using Web.Services.WebSockets;

namespace Web.Services.Middleware
{
    public class AgentWebSocketMiddleware
    {
        private readonly RequestDelegate _next;
        private AgentWebSocketManager _agentWebSocketManager { get; set; }

        public AgentWebSocketMiddleware(RequestDelegate next, AgentWebSocketManager agentWebSocketManager)
        {
            _next = next;
            _agentWebSocketManager = agentWebSocketManager;
        }

        public async Task Invoke(HttpContext context)
        {
            if (!context.WebSockets.IsWebSocketRequest)
            {
                //await _next.Invoke(context);
                return;
            }
            //CancellationToken ct = context.RequestAborted;

            var socket = await context.WebSockets.AcceptWebSocketAsync();
            await _agentWebSocketManager.OnConnected(socket);

            await Receive(socket, async(result, buffer) => {
                if(result.MessageType == WebSocketMessageType.Text)
                {
                    await _agentWebSocketManager.ReceiveAsync(socket, result, buffer);
                    return;
                }
                else if(result.MessageType == WebSocketMessageType.Close)
                {
                    await _agentWebSocketManager.OnDisconnected(socket);
                    return;
                }
            });
        }



        private async Task Receive(WebSocket socket, Action<WebSocketReceiveResult, byte[]> handleMessage)
        {
            var buffer = new byte[1024 * 4];
            while(socket.State == WebSocketState.Open)
            {
                var result = await socket.ReceiveAsync(buffer: new ArraySegment<byte>(buffer), cancellationToken: CancellationToken.None);
                handleMessage(result, buffer);
            }
        }
    }
}
