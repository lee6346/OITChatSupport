using System;
using System.Threading.Tasks;
using Web.Dtos;
using Microsoft.AspNetCore.SignalR;

namespace Web.Services.Hubs
{

    public class AgentHub: Hub
    {
        public AgentHub()
        {
        }


        public async Task JoinGroup(AgentDto agent)
        {
            await Groups.AddAsync(Context.ConnectionId, agent.BotHandle);
            await Clients.Group(agent.BotHandle).InvokeAsync("JoinGroup", agent);
        }

        public async Task LeaveGroup(AgentDto agent)
        {
            await Groups.RemoveAsync(Context.ConnectionId, agent.BotHandle);
            await Clients.Group(agent.BotHandle).InvokeAsync("LeaveGroup", agent);
        }

        public Task LiveTransfer(LiveTransferDto liveTransferDto)
        {
            return Clients.Group(liveTransferDto.BotHandle).InvokeAsync("LiveTransfer", liveTransferDto);
        }

        public Task RemoveTransferRequest(LiveTransferDto liveTransferDto)
        {
            return Clients.Group(liveTransferDto.BotHandle).InvokeAsync("RemoveTransferRequest", liveTransferDto);
        }

        public Task Send(AgentGroupMessageDto agentGroupMessage)
        {
            return Clients.Group(agentGroupMessage.GroupName).InvokeAsync("Send", agentGroupMessage);
        }

    }
}
