using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Web.Services.ConfigBuilder;
using Web.Services;
using Microsoft.AspNetCore.Antiforgery;
using Web.Services.Hubs;
using Web.Data.Context;
using Microsoft.EntityFrameworkCore;
using Web.Repositories;

namespace OITChatSupport.Web
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
            services.Configure<LdapConnectionOptions>(options => Configuration.Bind(options));
            services.Configure<DirectLineApi>(options => Configuration.Bind(options));
            services.Configure<DataConnectionOptions>(options => Configuration.Bind(options));

            services.AddDbContext<OitChatSupportContext>(c => c.UseSqlServer(Configuration.Get<DataConnectionOptions>().LocalDbConnectionString));
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
            services.AddScoped<IAdminRepository, AdminRepository>();
            services.AddScoped<IAgentRepository, AgentRepository>();
            services.AddScoped<IAgentGroupMessageRepository, AgentGroupMessageRepository>();
            services.AddScoped<IDirectLineMessageRepository, DirectLineMessageRepository>();
            services.AddScoped<IDirectLineSessionRepository, DirectLineSessionRepository>();
            services.AddScoped<IEventLogRepository, EventLogRepository>();

            services.AddScoped<IDirectLineService, DirectLineService>();
            services.AddSignalR();
            services.AddMvc();
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
        }
    }
}
