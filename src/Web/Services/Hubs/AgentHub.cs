using System;
using System.Threading.Tasks;
using Web.Dtos;
using System.Linq;
using Microsoft.AspNetCore.SignalR;
using System.Collections;
using System.Collections.Generic;

namespace Web.Services.Hubs
{
    public class AgentHub: Hub
    {

        private readonly IAgentHubTracker _agentHubTracker;
        public AgentHub(IAgentHubTracker agentHubTracker)
        {
            _agentHubTracker = agentHubTracker;
        }

        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            
            return base.OnDisconnectedAsync(exception);
        }

        public async Task JoinGroupAsync(AgentDto agent)
        {
            await _agentHubTracker.AddAgent(Context.ConnectionId, agent);
            //await Groups.AddAsync(Context.ConnectionId, agent.UtsaDepartment);
            //await Clients.Group(agent.UtsaDepartment).InvokeAsync("JoinGroup", agent);
        }
        public async Task LeaveGroupAsync(AgentDto agent)
        {
            await _agentHubTracker.RemoveAgent(Context.ConnectionId);
            //await Groups.RemoveAsync(Context.ConnectionId, agent.UtsaDepartment);
            //await Clients.Group(agent.UtsaDepartment).InvokeAsync("LeaveGroup", agent);
        }

        public async Task LiveTransferAsync(LiveTransferDto liveTransferDto)
        {
            await Clients.Group(liveTransferDto.BotHandle).InvokeAsync("LiveTransfer", liveTransferDto);
        }

        public async Task RemoveTransferRequest(LiveTransferDto liveTransferDto)
        {
            await Clients.Group(liveTransferDto.BotHandle).InvokeAsync("RemoveTransferRequest", liveTransferDto);
        }

        public async Task Send(AgentGroupMessageDto agentGroupMessage)
        {
            await Clients.Group(agentGroupMessage.Group).InvokeAsync("Send", agentGroupMessage);
        }

        public IEnumerable<AgentDto> GetAgents(string group)
        {
            return _agentHubTracker.AgentsOnline(group).Result;
        }

        public Task<bool> AgentsAvailable(string group)
        {
            var success = (GetAgents(group).Count() > 0);
            return Task.FromResult(success);
        }

    }
}
