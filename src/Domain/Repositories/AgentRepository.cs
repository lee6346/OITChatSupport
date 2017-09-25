using Domain.Model;
using Domain.Model.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Repositories
{
    public class AgentRepository: IAgentRepository
    {

        public Agent GetById(long id)
        {
            return null;
        }

        public void Add(Agent agent)
        {

        }

        public void Update(Agent agent)
        {

        }

        public void Remove(Agent agent)
        {

        }

        public IQueryable<Agent> GetAll()
        {
            return GetAll(false);
        }
        public IQueryable<Agent> GetAll(bool connected)
        {
            return null;
        }
        public IQueryable<Agent> GetByDepartment(UtsaDepartment utsaDepartment)
        {
            return GetByDepartment(utsaDepartment, false);
        }
        public IQueryable<Agent> GetByDepartment(UtsaDepartment utsaDepartment, bool connected)
        {
            return null;
        }
        public async Task SaveChangesAsync()
        {
            
        }
    }
}
