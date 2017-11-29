using System.Collections.Generic;
using System.Threading.Tasks;
using OITChatSupport.Application.Dtos;

namespace OITChatSupport.Application.Services
{
    public interface IAccountService
    {
        Task<bool> AuthorizeAgent(AccountDto account);
        Task DisconnectAgent(AgentDto agent);
        Task<IList<AgentDto>> RetrieveGroupAgents();
        
    }
}
