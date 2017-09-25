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
using Web.Services.RealTime.Samples;

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



            //Add Signal R (optionally .AddRedis())
            services.AddSignalR();


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

            //Add cross origin requests
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

            // scoped services
            services.AddScoped<IDirectLineService, DirectLineService>();

            services.AddMvc();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Version = "v1", Title = "Chat bot web application" });
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IAntiforgery antiforgery)
        {

            /*Order is:
             *  Errors/Exceptions
             *  Static Files
             *  Swagger
             *  Logger
             *  Cors
             *  Mvc/Routing
             * 
             */
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

            app.UseSignalR(routes =>
            {
                routes.MapHub<NewsHub>("news");
                routes.MapHub<Chat1>("chat");
            });

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
