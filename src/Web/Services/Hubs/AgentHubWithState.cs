using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Services.Hubs
{
    public class AgentHubWithState: AgentHubWithPresence
    {
        public AgentHubWithState(IAgentTracker<AgentHubWithState> agentTracker)
            : base(agentTracker)
        {

        }

        public override async Task OnConnectedAsync()
        {
            await Clients.Client(Context.ConnectionId).InvokeAsync("SetUsersOnline", await GetAgents("AskRowdy"));
            await base.OnConnectedAsync();
        }

        public override Task OnAgentsJoined(AgentDto[] agents)
        {
            return Clients.Client(Context.ConnectionId).InvokeAsync("AgentsJoined", agents);
        }

        public override Task OnAgentsLeft(AgentDto[] agents)
        {
            return Clients.Client(Context.ConnectionId).InvokeAsync("AgentsLeft", agents);
        }

        public async Task Send(string message)
        {
            await Clients.All.InvokeAsync("Send", Context.User.Identity.Name, message);
        }
    }
}
