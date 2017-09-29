using System;

namespace Web.Services.Errors
{
    public class AuthorizationException : Exception
    {
        public AuthorizationException(string message = null) : base(message) { }
    }
}