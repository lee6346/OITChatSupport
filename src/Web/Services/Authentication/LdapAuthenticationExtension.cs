using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.Authentication
{
    public static class LdapAuthenticationExtension
    {

        public static void AddLdapAuthentication<TUser>(this IServiceCollection collection, Action<LdapAuthenticationOptions> setupAction = null)
            where TUser: class
        {
            if(setupAction != null)
            {
                collection.Configure(setupAction);
            }
        }
    }
}
