using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Services
{
    public interface IAccountService
    {
        Task<bool> AuthorizeAgent(AccountDto account);
        Task DisconnectAgent(AgentDto agent);
        Task<IList<AgentDto>> RetrieveGroupAgents(string botHandle);
        
    }
}
