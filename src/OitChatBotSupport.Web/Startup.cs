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
using OITChatBotSupport.Application.OITAgents.Dtos;

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
            services.AddScoped<IGroupMessageRepository, GroupMessageRepository>();

            services.AddScoped<IRequestHandler<StartChatSession, Conversation>, ChatSessionHandler>();
            services.AddScoped<IRequestHandler<RequestTransfer, RequestTransferResponse>, TransferRequestHandler>();
            services.AddScoped<INotificationHandler<AgentConnected>, AgentConnectionHandler>();
            services.AddScoped<INotificationHandler<AgentDisconnected>, AgentConnectionHandler>();
            services.AddScoped<INotificationHandler<GroupMessageSent>, GroupMessagingHandler>();
            services.AddScoped<IRequestHandler<GetGroupMessages, List<GroupMessageDto>>, GroupMessagingHandler>();
            services.AddScoped<IRequestHandler<GetPendingRequests, List<PendingRequestDto>>, GetPendingRequestsHandler>();
            services.AddScoped<IRequestHandler<AcceptTransfer, Conversation>, AcceptTransferHandler>();
            services.AddScoped<IRequestHandler<GetAgentGroup, List<AgentDto>>, GetAgentGroupHandler>();

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
