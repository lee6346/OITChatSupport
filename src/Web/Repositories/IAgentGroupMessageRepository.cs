﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Models;
using Web.Models.Common;

namespace Web.Repositories
{
    public interface IAgentGroupMessageRepository
    {
        Task<IEnumerable<AgentGroupMessage>> GetByDepartmentAsync(UtsaDepartment utsaDepartment);
        Task<IEnumerable<AgentGroupMessage>> GetByDepartmentAsync(UtsaDepartment utsaDepartment, DateTime? start, int numOfDays);
        Task<IEnumerable<AgentGroupMessage>> GetAllAsync();
        Task<IEnumerable<AgentGroupMessage>> GetAllAsync(DateTime? start, int numOfDays);
        Task AddAsync(AgentGroupMessage agentGroupMessage);
        Task UpdateAsync(AgentGroupMessage agentGroupMessage);
        Task RemoveAsync(AgentGroupMessage agentGroupMessage);


    }
}
