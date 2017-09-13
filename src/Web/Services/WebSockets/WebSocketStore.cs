using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;
using Web.Services.Errors;

namespace Web.Services.WebSockets
{
    public class WebSocketStore
    {
        private ConcurrentDictionary<string, WebSocket> _sockets = new ConcurrentDictionary<string, WebSocket>();

        /// <summary>
        /// Get web socket by its id
        /// </summary>
        /// <param name="id"></param>
        /// <returns>WebSocket object (null if none exist)</returns>
        public WebSocket GetSocketById(string id)
        {
            return _sockets.FirstOrDefault(p => p.Key == id).Value;
        }


        /// <summary>
        /// Get all web sockets currently stored
        /// </summary>
        /// <returns>ConcurrentDictionary</returns>
        public ConcurrentDictionary<string, WebSocket> GetAll()
        {
            return _sockets;
        }

        /// <summary>
        /// Get the Id mapping to the web socket
        /// </summary>
        /// <param name="socket"></param>
        /// <returns>string id (null if none exist)</returns>
        public string GetId(WebSocket socket)
        {
            return _sockets.FirstOrDefault(p => p.Value == socket).Key;
        }

        /// <summary>
        /// Add new socket connection to the store, throws exception on error
        /// </summary>
        /// <param name="socket"></param>
        public void AddSocket(WebSocket socket)
        {

            if (!_sockets.TryAdd(CreateConnectionId(), socket))
            {
                throw new WebSocketStoreException("UID for socket already exists in the dictionary");
            }
        }

        /// <summary>
        /// Closes a socket connection by id and removes it from the dictionary
        /// Throws Exception if no socket id exists
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task RemoveSocket(string id)
        {
            if (_sockets.TryRemove(id, out WebSocket socket))
            {
                await socket.CloseAsync(closeStatus: WebSocketCloseStatus.NormalClosure,
                                    statusDescription: "Closed by the WebSocketManager",
                                    cancellationToken: CancellationToken.None);
            }
            else
            {
                throw new WebSocketStoreException("Socket Id does not exist in the dictionary");
            }

        }

        /// <summary>
        /// Closes all socket connections in the dictionary, then clears the dictionary
        /// 
        /// </summary>
        /// <returns></returns>
        public async Task RemoveAll()
        {
            foreach (var sock in _sockets)
            {
                await sock.Value.CloseAsync(
                    closeStatus: WebSocketCloseStatus.NormalClosure,
                    statusDescription: "Closed by socket connector",
                    cancellationToken: CancellationToken.None
                    );
            }
            _sockets.Clear();
        }

        /// <summary>
        /// Generates a UID to map to a new websocket object  
        /// </summary>
        /// <returns>string Id</returns>
        public string CreateConnectionId()
        {
            return Guid.NewGuid().ToString();
        }

        /// <summary>
        /// Checks the current connection state of a websocket by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns>enum WebSocketState</returns>
        public WebSocketState CheckSocketStatus(string id)
        {
            return GetSocketById(id).State;
        }


        /// <summary>
        /// Get all currently stored websockets enumerator 
        /// </summary>
        /// <returns>IEnumerator</returns>
        public IEnumerator<WebSocket> GetEnumerator()
        {
            foreach (var socket in _sockets)
            {
                yield return socket.Value;
            }
        }
    }
}
