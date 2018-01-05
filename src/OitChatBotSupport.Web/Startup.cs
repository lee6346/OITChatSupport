using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Antiforgery;
using OITChatBotSupport.Infrastructure.Configuration;
using MediatR;
using Microsoft.Bot.Connector.DirectLine;
using OITChatBotSupport.Domain.DirectLineChat;
using OITChatBotSupport.Infrastructure.Data.Repositories;
using OITChatBotSupport.Domain.AgentSupport;
using OITChatBotSupport.Infrastructure.Data.Sql;
using OITChatBotSupport.Application.Student.Commands;
using OITChatBotSupport.Application.Student.Handlers;
using OITChatBotSupport.Application.OITAgents.Events;
using OITChatBotSupport.Application.OITAgents.Commands;
using OITChatBotSupport.Application.OITAgents.Handlers;
using OITChatBotSupport.Web.Hubs;
using System.Collections.Generic;
using OITChatBotSupport.Infrastructure.Rest;
using OITChatBotSupport.Infrastructure.Data.InMemory;

namespace OITChatBotSupport.Web
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
            services.Configure<RabbitMqOptions>(Configuration.GetSection("RabbitMq"));

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

            //services.AddSingleton<IRabbitMQService, RabbitMQService>();
            services.AddSingleton<ISqlConnectionFactory, SqlConnectionFactory>();
            services.AddSingleton<IConnectedAgentTracker, ConnectedAgentTracker>();
            services.AddSingleton<IDirectLineGateway, DirectLineGateway>();

            services.AddScoped<IChatSessionRepository, ChatSessionRepository>();
            services.AddScoped<IAgentRepository, AgentRepository>();
            services.AddScoped<IAgentTransferRepository, AgentTransferRepository>();

            services.AddScoped<IRequestHandler<StartChatSession, Conversation>, ChatSessionHandler>();
            services.AddScoped<IRequestHandler<RequestTransfer, RequestTransferResponse>, TransferRequestHandler>();
            services.AddScoped<INotificationHandler<AgentConnected>, AgentConnectionHandler>();
            services.AddScoped<INotificationHandler<AgentDisconnected>, AgentConnectionHandler>();
            services.AddScoped<IRequestHandler<GetPendingRequests, List<GetPendingRequestResponse>>, GetPendingRequestsHandler>();
            services.AddScoped<IRequestHandler<AcceptTransfer, Conversation>, AcceptTransferHandler>();
            services.AddScoped<IRequestHandler<GetConnectedAgents, List<ConnectedAgent>>, AgentConnectionHandler>();

            //default sets AuthenticationScheme="Cookies"
            /*
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie(options => 
            {
                options.Cookie.Name = "AgentCookie";
                //cookie is only accessible by client side script
                options.Cookie.HttpOnly = true;
                //length that auth ticket stored in cookie will remain valid (default = 14 days)
                options.ExpireTimeSpan = TimeSpan.FromMinutes(60);
                //if agent unauthorized, will redirect to this url
                options.LoginPath = "/Account/Login";
                //when agent logs out, redirects to this path (default=/account/logout)
                options.LogoutPath = "/Account/Logout";
                //for authorization fails, redirects
                options.AccessDeniedPath = "/Account/AccessDenied";
                //true => new cookie issued for user with refreshed exp time when current cookie is more than halfway in expire time span
                options.SlidingExpiration = true;
                //sets cookie auth only to specified path and its nested URLs
                options.Cookie.Path = "/Agent";
                options.Cookie.
            });
            */


            services.AddMediatR(typeof(Startup));
            services.AddSignalR();
            services.AddMvc();

            //default in-memory implementation of IDistrubted cache
            /*
            services.AddDistributedMemoryCache(options =>
            {

            });

            services.AddSession(config =>
            {
                config.IdleTimeout = TimeSpan.FromMinutes(60);
                config.Cookie.HttpOnly = true;
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
            /*
            var angularAppRoutes = new[]
            {
                "/home",
                "/news"
            };

            app.Use(async (context, next) =>
            {
                if (context.Request.Path.HasValue && angularAppRoutes.FirstOrDefault(ar => context.Request.Path.Value.StartsWith(ar, StringComparison.OrdinalIgnoreCase)) != null)
                {
                    context.Request.Path = new PathString("/");
                }
                await next();
            });
            */
            app.UseCors("AllowAllOrigins");

            //app.UseDefaultFiles();
            app.UseStaticFiles();

            //for custom cookie auth
            //app.UseAuthentication();
            //for session store
            //app.UseSession(new SessionOptions() { });


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
