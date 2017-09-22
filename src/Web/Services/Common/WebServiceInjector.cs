using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Services.Authentication;

namespace Web.Services.Common
{
    internal static class WebServiceInjector
    {
        internal static void ConfigureDependencies(this IServiceCollection services)
        {
            services.AddScoped<IAuthenticationService, LdapAuthenticationService>();
        }
        
    }
}
