using System;

namespace OITChatSupport.Infrastructure.Errors
{
    public class AuthorizationException : Exception
    {
        public AuthorizationException(string message = null) : base(message) { }
    }
}