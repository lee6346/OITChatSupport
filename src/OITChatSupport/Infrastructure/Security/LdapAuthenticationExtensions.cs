using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace OITChatSupport.Infrastructure.Security
{
    public static class LdapAuthenticationExtensions
    {
        public static IServiceCollection AddLdapAuthentication(this IServiceCollection services)
        {
            services.AddTransient<LdapAuthentication>();
            return services;
        }
        public static IApplicationBuilder MapLdapAuthentication(
            this IApplicationBuilder application, PathString path, LdapAuthentication authentication)
        {
            return application.Map(path, (_application) => _application.UseMiddleware<LdapAuthenticationMiddleware>(authentication));
        }
    }
}
