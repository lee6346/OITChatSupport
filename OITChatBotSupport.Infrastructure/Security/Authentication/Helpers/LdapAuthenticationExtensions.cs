using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;

namespace OITChatBotSupport.Infrastructure.Security.Authentication.Helpers
{
    public static class LdapAuthenticationExtensions
    {
        public static IApplicationBuilder MapLdapAuthentication(this IApplicationBuilder builder, PathString path, LdapAuthenticationHandler ldapAuthenticationHandler)
        {
            return builder.Map(path, (_builder) => _builder.UseMiddleware<LdapAuthenticationMiddleware>(ldapAuthenticationHandler));
        }
    }
}
