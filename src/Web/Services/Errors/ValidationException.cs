using System;

namespace Web.Services.Errors
{
    public class ValidationException : Exception
    {
        public ValidationException(string message = null) : base(message)
        {

        }
    }
}