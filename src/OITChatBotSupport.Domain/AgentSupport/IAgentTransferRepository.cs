using System.Collections.Generic;
using System.Threading.Tasks;

namespace OITChatBotSupport.Domain.AgentSupport
{
    public interface IAgentTransferRepository
    {
        Task AddNewRequestAsync(AgentTransfer agentTransfer);
        Task UpdateRequestStatusAsync(string conversationId, string transferStatus, string agentId=null);
        Task<IEnumerable<AgentTransfer>> GetWaitingRequestsAsync();
    }
}
