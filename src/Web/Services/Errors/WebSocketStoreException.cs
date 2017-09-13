using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.Errors
{
    public class WebSocketStoreException: Exception
    {
        public WebSocketStoreException(string message): base(message) { }
    }
}
