using System;

namespace Web.Services.Errors
{
    public class WebSocketStoreException: Exception
    {
        public WebSocketStoreException(string message): base(message) { }
    }
}
