using Microsoft.AspNetCore.SignalR;
using OITChatSupport.Web.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.RealTime
{
    public class HubWithPresence: Hub
    {
        private IAgentTracker<HubWithPresence> _agentTracker;


        public HubWithPresence(IAgentTracker<HubWithPresence> agentTracker)
        {
            _agentTracker = agentTracker;
        }

        public Task<IEnumerable<AgentDto>> GetAgentsOnline(string department)
        {
            return _agentTracker.AgentsOnline(department);
        }

        public virtual Task OnAgentsJoined(AgentDto[] agents)
        {
            return Task.CompletedTask;
        }

        public virtual Task OnAgentsLeft(AgentDto[] agents)
        {
            return Task.CompletedTask;
        }
    }
}
