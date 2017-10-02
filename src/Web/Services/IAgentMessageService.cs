using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Services
{
    public interface IAgentMessageService
    {
        Task MessageGroup(AgentGroupMessageDto agentGroupMessageDto);
        Task MessageAgent(string connectionId, AgentGroupMessageDto agentGroupMessageDto);
        Task MessageGroup(LiveTransferRequestDto liveTransferDto);
        Task JoinAgentGroup(string agentGroup);
        Task LeaveAgentGroup(string agentGroup);
        Task CreateAgentGroup(string agentGroup);
        Task RemoveAgentGroup(string agentGroup);
    }
}
