using Microsoft.AspNetCore.Http;
using System.IO;
using System.Threading.Tasks;

namespace OITChatBotSupport.Infrastructure.Security.Authentication.Helpers
{
    public class LdapAuthenticationMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILdapAuthenticationHandler _ldapAuthentication;

        public LdapAuthenticationMiddleware(RequestDelegate next, ILdapAuthenticationHandler ldapAuthentication)
        {
            _next = next;
            _ldapAuthentication = ldapAuthentication;
        }

        public async Task Invoke(HttpContext context)
        {  
            if(context.Request.Method == HttpMethods.Post)
            {
                using(StreamReader reader = new StreamReader(context.Request.Body))
                {

                }
            }
            await _next.Invoke(context);
        }
    }
}
