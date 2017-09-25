using Domain.Common;
using Domain.Model;
using Domain.Model.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Repositories
{
    public interface IAgentRepository: IRepository<Agent>
    {
        IQueryable<Agent> GetAll();
        IQueryable<Agent> GetAll(bool connected);
        IQueryable<Agent> GetByDepartment(UtsaDepartment utsaDepartment);
        IQueryable<Agent> GetByDepartment(UtsaDepartment utsaDepartment, bool connected);

    }
}
