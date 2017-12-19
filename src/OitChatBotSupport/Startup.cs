using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Antiforgery;
using OITChatBotSupport.Infrastructure.Configuration;
using OITChatBotSupport.Infrastructure.RPC;
using MediatR;
using Microsoft.Bot.Connector.DirectLine;
using System;
using OITChatBotSupport.Domain.DirectLineChat;
using OITChatBotSupport.Infrastructure.Data.Repositories;
using OITChatBotSupport.Infrastructure.Data.InMemory;
using OITChatBotSupport.Domain.AgentSupport;
using CacheManager.Core;
using OITChatBotSupport.Infrastructure.Data.Sql;
using OITChatBotSupport.Application.Student.Commands;
using OITChatBotSupport.Application.Student.Handlers;
using OITChatBotSupport.Application.OITAgents.Events;
using OITChatBotSupport.Application.OITAgents.Commands;
using OITChatBotSupport.Application.OITAgents.Handlers;
using System.Collections.Generic;

namespace OITChatBotSupport
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

            services.AddSingleton<ISqlConnectionFactory, SqlConnectionFactory>();
            services.AddSingleton<IConnectedAgentTracker, ConnectedAgentTracker>();
            services.AddSingleton<IDirectLineGateway, DirectLineGateway>();

            services.AddScoped<IChatSessionRepository, ChatSessionRepository>();
            services.AddScoped<IAgentRepository, AgentRepository>();
            services.AddScoped<IAgentTransferRepository, AgentTransferRepository>();
            /*
            services.AddCacheManager<PendingRequest>(configure: opt =>
            {
                opt.WithJsonSerializer()
                    .WithMaxRetries(10)
                    .WithDictionaryHandle()
                        .WithExpiration(ExpirationMode.Absolute, TimeSpan.FromMinutes(30));
            });
            */
            services.AddScoped<IRequestHandler<StartChatSession, Conversation>, ChatSessionHandler>();
            services.AddScoped<IRequestHandler<RequestTransfer, RequestTransferResponse>, TransferRequestHandler>();

            services.AddScoped<INotificationHandler<AgentConnected>, AgentConnectionHandler>();
            services.AddScoped<INotificationHandler<AgentDisconnected>, AgentConnectionHandler>();
            services.AddScoped<IRequestHandler<GetPendingRequests, List<GetPendingRequestResponse>>, GetPendingRequestsHandler>();
            services.AddScoped<IRequestHandler<AcceptTransfer, Conversation>, AcceptTransferHandler>();
            services.AddScoped<IRequestHandler<GetConnectedAgents, List<ConnectedAgent>>, AgentConnectionHandler>();

            
            //services.AddSingleton<ILdapAuthenticationHandler, LdapAuthenticationHandler>();
            
            
            services.AddMediatR(typeof(Startup));
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
