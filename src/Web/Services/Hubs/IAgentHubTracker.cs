using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Services.Hubs
{
    public interface IAgentHubTracker
    {
        Task<IEnumerable<AgentDto>> AgentsOnline(string department);

        Task<bool> AddAgent(string connectionId, AgentDto agent);

        Task<bool> RemoveAgent(string connectionId);

        Task InvokeLiveSupport(string group, SupportTransferDto support);

        Task InvokeLiveRequest(string group, LiveTransferDto request);

        Task InvokeGroupMessage(string group, AgentGroupMessageDto groupMessage);
    }
}
