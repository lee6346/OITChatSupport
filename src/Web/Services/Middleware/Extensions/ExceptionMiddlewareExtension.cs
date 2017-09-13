using Microsoft.AspNetCore.Builder;

namespace OITChatSupport.Web.Services.Middleware.Extensions
{
    public static class ExceptionMiddlewareExtension
    {
        public static IApplicationBuilder UseException(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ExceptionMiddleware>();
        }
    }
}