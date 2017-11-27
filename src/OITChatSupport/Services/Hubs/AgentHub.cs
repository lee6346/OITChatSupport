using System;
using System.Threading.Tasks;
using OITChatSupport.Dtos;
using Microsoft.AspNetCore.SignalR;

namespace OITChatSupport.Services.Hubs
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

        public async override Task OnDisconnectedAsync(Exception exception)
        {
            await _agentHubTracker.RemoveAgent(Context.ConnectionId);
            await base.OnDisconnectedAsync(exception);
        }

        public async Task JoinGroup(AgentDto agent)
        {
            await _agentHubTracker.AddAgent(Context.ConnectionId, agent);
        }
        public async Task LeaveGroup()
        {
            await _agentHubTracker.RemoveAgent(Context.ConnectionId);
        }

        public async Task LiveTransfer(LiveTransferDto liveTransferDto)
        {
            await Clients.Group("OITChatSupport").InvokeAsync("LiveTransfer", liveTransferDto);
        }

        public async Task RemoveTransferRequest(LiveTransferDto liveTransferDto)
        {
            await Clients.Group("OITChatSupport").InvokeAsync("RemoveTransferRequest", liveTransferDto);
        }

        public async Task Send(GroupMessageDto agentGroupMessage)
        {
            await Clients.Group("OITChatSupport").InvokeAsync("Send", agentGroupMessage);
        }
    }
}
