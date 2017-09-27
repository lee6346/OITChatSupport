using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.Authentication
{
    public static class LdapAuthenticationExtension
    {
        /*
        public static void AddLdapAuthentication<TUser>(this IServiceCollection collection, Action<LdapAuthenticationOptions> setupAction = null)
            where TUser: class
        {
            if(setupAction != null)
            {
                collection.Configure(setupAction);
            }
        }

        public static IApplicationBuilder MapLdapAuthentication(this IApplicationBuilder app, PathString path, LdapUserManager<TUser> manager)
        {
            return app.Map(path, (_app) => _app.UseMiddleware<>
        }*/
    }
}
