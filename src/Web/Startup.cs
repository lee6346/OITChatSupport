using System;
using System.Web;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using OITChatSupport.Web.ConfigBuilder;
using Swashbuckle.AspNetCore.Swagger;
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
           
            // Add Configuration files and options classes
            services.AddOptions();
            services.Configure<EmailMessage>(Configuration);

            //bind the Ldap class to configuration options
            services.Configure<Ldap>(options => 
            {
                Configuration.Bind(options);
            });
            //bind the Direct line config data 
            services.Configure<DirectLineApi>(options =>
            {
                Configuration.Bind(options);
            });
            /*
            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();
            */
            services.Configure<IdentityOptions>(options =>
            {
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(10);
                options.Lockout.MaxFailedAccessAttempts = 10;
                options.Lockout.AllowedForNewUsers = true;
                
            });

            services.ConfigureApplicationCookie(options =>
            {
                options.Cookie.HttpOnly = true;
                options.Cookie.Expiration = TimeSpan.FromDays(5);
                options.LoginPath = "/Account/Login";
                options.LogoutPath = "/Account/Logout";
                //options.AccessDeniedPath = "/Account/AccessDenied"
                options.SlidingExpiration = true;
            });


            /*
            services.AddSignalR();
            services.AddSingleton(typeof(DefaultAgentHubLifetimeManager<>), typeof(DefaultAgentHubLifetimeManager<>));
            services.AddSingleton(typeof(HubLifetimeManager<>), typeof(DefaultAgentHubLifetimeManager<>));
            services.AddSingleton(typeof(IAgentTracker<>), typeof(InMemoryAgentTracker<>));
            */


            //in a controller/service... 
            // private readonly IOptions<ConnectionStrings> _options;
            // public Controller(IOptions<ConnectionStrings> options){ _options = options}
            // _options.Value.ConnectionString


            //Add https requirements (ignores any http requests). in Configure(), the middleware will redirect all Http to Https using 'RewriteOptions()'
            /*
            services.Configure<MvcOptions>(options =>
            {
                options.Filters.Add(new RequireHttpsAttribute());
            });
            */

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

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Version = "v1", Title = "Chat bot web application" });
            });

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
            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Chatbot Web Application V1");
            });
        }
    }
}
