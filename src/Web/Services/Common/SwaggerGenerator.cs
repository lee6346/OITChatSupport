using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.PlatformAbstractions;



namespace Web.Services.Common
{
    internal static class SwaggerGenerator
    {

        internal static void ConfigureSwagger(this IServiceCollection services)
        {
            services.AddSwaggerGen(options =>
            {
                /*options.SingleApiVersion(new Info
                 * {
                 *  Version = "v1",
                 *  Title = "My API",
                 *  Description = "My First ASP.NET Core Web API",
                 *  TermsOfService = "None",
                 *  Contact = new Contact { Name = "Talking Dotnet", Email = "...", ..}
                 * });
                 */
                options.IncludeXmlComments(GetXmlCommentsPath());
                options.DescribeAllEnumsAsStrings();
            });
        }

        private static string GetXmlCommentsPath()
        {
            var app = PlatformServices.Default.Application;
            return System.IO.Path.Combine(app.ApplicationBasePath, "Web.Services.xml");
        }
    }
}
