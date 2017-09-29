using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Models;

namespace Web.Repositories
{
    public interface IAgentRepository
    {
        Task<IList<Agent>> GetAllAsync();
        Task<IList<Agent>> GetAllAsync(bool connected);
        Task<IList<Agent>> GetByDepartmentAsync(string utsaDepartment);
        Task<IList<Agent>> GetByDepartmentAsync(string utsaDepartment, bool connected);
        Task<Agent> GetByIdAsync(string utsaId);
        Task AddAsync(Agent agent);
        Task UpdateAsync(Agent agent);
        Task RemoveAsync(Agent agent);

    }
}
