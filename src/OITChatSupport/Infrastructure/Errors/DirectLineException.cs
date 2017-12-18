using System;
using System.Net;

namespace OITChatSupport.Infrastructure.Errors
{
    public class DirectLineException : Exception
    {
        public DirectLineException(HttpStatusCode code, string message = null) : base(message)
        {
            Code = code;
        }
        public HttpStatusCode Code { get; }
    }
}