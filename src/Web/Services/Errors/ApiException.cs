using System;

namespace OITChatSupport.Web.Services.Errors
{
    public class ApiException : Exception
    {
        public ApiException(string message = null) : base(message)
        {

        }
    }
}