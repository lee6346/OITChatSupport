using Domain.Model;
using Domain.Model.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Domain.Repositories
{
    public interface IAgentGroupMessageRepository: IMessageRepository
    {
        IQueryable<AgentGroupMessage> GetByDepartment(UtsaDepartment utsaDepartment);
        IQueryable<AgentGroupMessage> GetByDepartment(UtsaDepartment utsaDepartment, DateTime start, int numOfDays);
    }
}
