using Microsoft.AspNetCore.SignalR;
using OITChatSupport.Web.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OITChatSupportWeb.Services.RealTime
{
    /// <summary>
    /// 
    /// 
    /// 
    /// 
    /// </summary>
    public class AgentHub: Hub
    {
        public Task SendLiveRequest(LiveTransferDto liveTransferDto)
        {
            return Clients.Group(liveTransferDto.Department).InvokeAsync("SendLiveRequest", liveTransferDto);
        }

        public Task SendRemoveRequest(LiveTransferDto liveTransferDto)
        {
            return Clients.Group(liveTransferDto.Department).InvokeAsync("SendRemoveRequest", liveTransferDto);
        }

        public Task SendGroupMessage(AgentGroupMessageDto agentGroupMessageDto)
        {
            return Clients.Group(agentGroupMessageDto.Department).InvokeAsync("SendGroupMessage", agentGroupMessageDto);
        }

        public Task SendAgentMessage(AgentMessageDto agentMessageDto)
        {
            return Clients.
        }


        public async Task JoinGroup(AgentDto agentDto)
        {
            await Groups.AddAsync(Context.ConnectionId, agentDto.Department.ToString());
            await Clients.Group(agentDto.Department.ToString()).InvokeAsync("JoinGroup", agentDto);
        }

        public async Task LeaveGroup(AgentDto agentDto)
        {
            await Clients.Group(agentDto.Department.ToString()).InvokeAsync("LeaveGroup", agentDto);
            await Groups.RemoveAsync(Context.ConnectionId, agentDto.Department.ToString());
        }
    }
}
