using Microsoft.AspNetCore.Http;
using OITChatSupport.Web.Services.Errors;
using System;
using System.Threading.Tasks;

namespace OITChatSupport.Web.Services.Middleware
{
    public class ExceptionMiddleware
    {

        private readonly RequestDelegate _next;

        public ExceptionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }

        public static async Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            if (exception is AuthorizationException authorizationException)
            {

            }
            else if (exception is DirectLineException directLineException)
            {

            }
            else if (exception is ValidationException validationException)
            {

            }
            else if (exception is ApiException apiException)
            {

            }
            else
            {

            }

        }
    }
}