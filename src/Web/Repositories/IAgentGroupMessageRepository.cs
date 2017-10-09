using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Models;

namespace Web.Repositories
{
    public interface IAgentGroupMessageRepository
    {
        /*
        Task<IList<AgentGroupMessage>> GetByDepartmentAsync(string utsaDepartment);
        Task<IList<AgentGroupMessage>> GetByDepartmentAsync(string utsaDepartment, DateTime? start);
        */
        Task<IList<AgentGroupMessage>> GetAllAsync();
        Task<IList<AgentGroupMessage>> GetAllAsync(DateTime? start);
        Task AddAsync(AgentGroupMessage agentGroupMessage);
        //Task UpdateAsync(AgentGroupMessage agentGroupMessage);
        Task RemoveAsync(AgentGroupMessage agentGroupMessage);


    }
}
