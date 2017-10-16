using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Services
{
    public interface IAgentMessageService
    {
        Task MessageGroup(AgentGroupMessageDto agentGroupMessageDto);
        Task MessageAgent(string connectionId, AgentGroupMessageDto agentGroupMessageDto);
    }
}
