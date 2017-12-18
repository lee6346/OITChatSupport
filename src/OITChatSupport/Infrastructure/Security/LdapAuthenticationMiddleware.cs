using Microsoft.AspNetCore.Http;
using System.IO;
using System.Threading.Tasks;

namespace OITChatSupport.Infrastructure.Security
{
    public class LdapAuthenticationMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILdapAuthentication _remoteAuthentication;

        public LdapAuthenticationMiddleware(RequestDelegate next, ILdapAuthentication remoteAuthentication)
        {
            _next = next;
            _remoteAuthentication = remoteAuthentication;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            if(httpContext.Request.Protocol.ToLower() == "post")
            {
                using(StreamReader sr = new StreamReader(httpContext.Request.Body))
                {

                }
            }
            await _next.Invoke(httpContext);
        }
    }
}
