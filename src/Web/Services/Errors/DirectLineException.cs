using System;
using System.Net;

namespace OITChatSupport.Web.Services.Errors
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