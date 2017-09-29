using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using OITChatSupport.Web.ConfigBuilder;
using OITChatSupport.Web.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Http;
using Web.Services.ConfigBuilder;
using System.Net.WebSockets;
using Web.Services.RealTime;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.SignalR;
using Web.Web.Services.RealTime;
using Web.Services.Hubs;
using Web.Data.Context;
using Microsoft.EntityFrameworkCore;

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
            

            //Add Signal R
            services.AddSignalR();
            services.AddSingleton(typeof(DefaultAgentHubLifetimeManager<>), typeof(DefaultAgentHubLifetimeManager<>));
            services.AddSingleton(typeof(HubLifetimeManager<>), typeof(DefaultAgentHubLifetimeManager<>));
            services.AddSingleton(typeof(IAgentTracker<>), typeof(InMemoryAgentTracker<>));
            
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

            //Add XSRF (anti-request forgery) services to work with angular
            /*
            services.AddAntiforgery(options =>
            {
                options.HeaderName = "X-XSRF-TOKEN";
                options.CookieDomain = "mydomain.com";
                options.CookieName = "X-CSRF-TOKEN-
            });
            */

            //Identity configuration
            //services.AddIdentity<ApplicationUser>
            //Cookie configuration
            /*
            services.ConfigureApplicationCookie(options =>
            {
                options.ExpireTimeSpan = TimeSpan.FromHours(8);
                options.LoginPath = "/Account/Login";
                options.LogoutPath = "/Account/Logout";
            });
            */

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

            //redirect http to https
            /*
            var options = new RewriteOptions()
                .AddRedirectToHttps();
            app.UseRewriter(options);
            */
            //configure antiforgery middleware
            /*
            app.Use(next => context =>
            {
                string path = context.Request.Path.Value;
                if(
                    string.Equals(path, "/", StringComparison.OrdinalIgnoreCase) ||
                    string.Equals(path, "/index.html", StringComparison.OrdinalIgnoreCase))
                {
                    var tokens = antiforgery.GetAndStoreTokens(context);
                    context.Response.Cookies.Append("XSRF-TOKEN", tokens.RequestToken,
                        new CookieOptions() { HttpOnly = false });

                }
                return next(context);
            });
            */

            app.UseStaticFiles();
            //app.UseWebSockets();

            /*
            app.UseSignalR(routes =>
            {
                routes.MapHub<AgentHub>("Agent");
            });
            */
            app.UseMvc(routes => {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
