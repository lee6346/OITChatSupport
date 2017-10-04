using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Web.Services.ConfigBuilder;
using Web.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Http;
using System.Net.WebSockets;
using Web.Services.RealTime;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.SignalR;
using Web.Services.Hubs;
using Web.Data.Context;
using Microsoft.EntityFrameworkCore;
using Web.Repositories;
using System;

namespace OITChatSupport.Web
{

    public class Startup
    {
        public Startup(IConfiguration configuration)
        {

            Configuration = configuration;

        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
           
            // Add and bind Configuration files to options classes
            services.AddOptions();
            services.Configure<EmailMessage>(options => Configuration.Bind(options));
            services.Configure<LdapConnectionOptions>(options => Configuration.Bind(options));
            services.Configure<DirectLineApi>(options => Configuration.Bind(options));
            services.Configure<DataConnectionOptions>(options => Configuration.Bind(options));

            // Add ef core
            services.AddDbContext<OitChatSupportContext>(c => c.UseSqlServer(Configuration.Get<DataConnectionOptions>().LocalDbConnectionString));

            /*
            // Add in-memory distributed cache for session storage
            services.AddDistributedMemoryCache();

            // Add and configure session states
            services.AddSession(options =>
            {
                // length before session data is abandoned. Independent of cookie expiration time
                options.IdleTimeout = TimeSpan.FromSeconds(10);
                options.Cookie.HttpOnly = false;
                options.Cookie.Name = "SessionCookie";
                options.Cookie.Expiration = TimeSpan.FromHours(8);
            }); 
            */

            //Add Signal R
            //services.AddSignalR();
            //services.AddSingleton(typeof(DefaultAgentHubLifetimeManager<>), typeof(DefaultAgentHubLifetimeManager<>));
            //services.AddSingleton(typeof(HubLifetimeManager<>), typeof(DefaultAgentHubLifetimeManager<>));
            //services.AddSingleton(typeof(IAgentTracker<>), typeof(InMemoryAgentTracker<>));
            
            // Add Cross origin request handling
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


            //Add repositories
            services.AddScoped<IAdminRepository, AdminRepository>();
            services.AddScoped<IAgentRepository, AgentRepository>();
            services.AddScoped<IAgentGroupMessageRepository, AgentGroupMessageRepository>();
            services.AddScoped<IDirectLineMessageRepository, DirectLineMessageRepository>();
            services.AddScoped<IDirectLineSessionRepository, DirectLineSessionRepository>();
            services.AddScoped<IEventLogRepository, EventLogRepository>();


            //Add services
            services.AddScoped<IDirectLineService, DirectLineService>();

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
            //app.UseWebSockets();



            /*
            app.UseSignalR(routes =>
            {
                routes.MapHub<AgentHub>("Agent");
            });
            */
            //app.UseSession();
            app.UseMvc(routes => {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
