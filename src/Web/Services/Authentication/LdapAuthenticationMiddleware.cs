using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System.IO;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Services.Authentication
{
    public class LdapAuthenticationMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IRemoteAuthentication _remoteAuthentication;

        public LdapAuthenticationMiddleware(RequestDelegate next, IRemoteAuthentication remoteAuthentication)
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
