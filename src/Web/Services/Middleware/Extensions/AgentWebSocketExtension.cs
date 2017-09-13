using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Web.Services.WebSockets;

namespace Web.Services.Middleware.Extensions
{
    public static class AgentWebSocketExtension
    {
        public static IApplicationBuilder MapAgentWebSocketConnector(this IApplicationBuilder app, PathString path, AgentWebSocketManager manager)
        {
            return app.Map(path, (_app) => _app.UseMiddleware<AgentWebSocketMiddleware>(manager));
        }

        public static IServiceCollection AddAgentWebSocketConnector(this IServiceCollection services)
        {
            services.AddSingleton<AgentWebSocketConnector>();
            foreach(var type in Assembly.GetEntryAssembly().ExportedTypes)
            {
                if(type.GetTypeInfo().BaseType == typeof(AgentWebSocketConnector))
                {
                    services.AddSingleton(type);
                }
            }
            return services;
        }
    }
}
