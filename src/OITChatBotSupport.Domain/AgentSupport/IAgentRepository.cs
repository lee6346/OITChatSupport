using System.Collections.Generic;
using System.Threading.Tasks;

namespace OITChatBotSupport.Domain.AgentSupport
{
    public interface IAgentRepository
    {
        Task UpdateAgentConnectionAsync(string agentId, bool connected);
        Task<IEnumerable<Agent>> GetAgentsAsync(bool connected);
    }
}
