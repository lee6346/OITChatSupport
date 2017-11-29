using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using OITChatSupport.Infrastructure.Configuration;
using Microsoft.AspNetCore.Antiforgery;
using OITChatSupport.Infrastructure.Data.Sql;
using Microsoft.EntityFrameworkCore;
using OITChatSupport.Infrastructure.Security;
using OITChatSupport.Infrastructure.REST;
using OITChatSupport.Infrastructure.Data.Repositories;
using OITChatSupport.Application.Services;
using OITChatSupport.Application.RealTimeRPC;

namespace OITChatSupport
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddOptions();
            services.Configure<LdapOptions>(Configuration.GetSection("Ldap"));
            services.Configure<DirectLineOptions>(Configuration.GetSection("DirectLine"));
            services.Configure<SqlServerOptions>(Configuration.GetSection("SqlServer"));

            services.AddDbContext<OitChatSupportContext>(
                c => c.UseSqlServer(
                    Configuration.Get<SqlServerOptions>().LocalConnectionString)
                );

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins", builder =>
                {
                    builder
                        .AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Swashbuckle.AspNetCore.Swagger.Info
                {
                    Version = "v1",
                    Title = "UTSA OIT ChatBot Support",
                    Description = "APIs and Angular SPAs for supporting student queries"
                });
            });

            services.AddScoped<ILiveRequestRepository, LiveRequestRepository>();
            services.AddScoped<IAgentRepository, AgentRepository>();
            services.AddScoped<IDirectLineThreadRepository, DirectLineThreadRepository>();

            services.AddScoped<ILdapAuthentication, LdapAuthentication>();
            services.AddScoped<ILiveTransferService, LiveTransferService>();
            services.AddScoped<IAccountService, AccountService>();
            services.AddScoped<IDirectLineGateway, DirectLineGateway>();

            services.AddSignalR();
            services.AddSingleton<IAgentHubTracker, AgentHubTracker>();
            services.AddMvc();
            /*
            services.AddMemoryCache(options =>
            {
                options.ExpirationScanFrequency = TimeSpan.FromMinutes(10);
            });*/
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IAntiforgery antiforgery)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseCors("AllowAllOrigins");

            app.UseStaticFiles();

            app.UseSignalR(routes =>
            {
                routes.MapHub<AgentHub>("agent");
            });

            app.UseMvc(routes => {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            app.UseSwagger(c =>
            {
                c.PreSerializeFilters.Add((swagger, httpRequest) => swagger.Host = httpRequest.Host.Value);
            });

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "V1 Docs");
            });
        }
    }
}
