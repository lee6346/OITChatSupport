using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Services.Hubs
{
    public class AgentHubWithPresence: Hub
    {
        private IAgentTracker<AgentHubWithPresence> _agentTracker;
        public AgentHubWithPresence(IAgentTracker<AgentHubWithPresence> agentTracker)
        {
            _agentTracker = agentTracker;
        }

        public Task<IEnumerable<AgentDto>> GetAgents(string department)
        {
            return _agentTracker.AgentsOnline(department);
        }

        public virtual Task OnAgentsJoined(AgentDto[] agent)
        {
            return Task.CompletedTask;
        }

        public virtual Task OnAgentsLeft(AgentDto[] agent)
        {
            return Task.CompletedTask;
        }
    }
}
