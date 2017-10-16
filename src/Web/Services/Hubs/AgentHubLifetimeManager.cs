
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Web.Services.Hubs
{
    public class AgentHubLifetimeManager<THub>: PresenceHubLifetimeManager<THub, AgentHubLifetimeManager<THub>>
        where THub : AgentHubWithPresence
    {
        public AgentHubLifetimeManager(IAgentTracker<THub> agentTracker, IServiceScopeFactory serviceScopeFactory, IServiceProvider serviceProvider)
            : base(agentTracker, serviceProvider, serviceScopeFactory)
        {

        }
    }
}
