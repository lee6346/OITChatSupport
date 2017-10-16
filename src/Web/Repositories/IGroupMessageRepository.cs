using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Models;

namespace Web.Repositories
{
    public interface IGroupMessageRepository
    {
        Task<IList<AgentGroupMessage>> GetAllAsync(string group);
        Task AddAsync(AgentGroupMessage agentGroupMessage);
    }
}
