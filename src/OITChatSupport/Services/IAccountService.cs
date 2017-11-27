using System.Collections.Generic;
using System.Threading.Tasks;
using OITChatSupport.Dtos;

namespace OITChatSupport.Services
{
    public interface IAccountService
    {
        Task<bool> AuthorizeAgent(AccountDto account);
        Task DisconnectAgent(AgentDto agent);
        Task<IList<AgentDto>> RetrieveGroupAgents();
        
    }
}
