using Web.Model;
using Web.Model.Common;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Web.Repositories
{
    public interface IAgentRepository
    {
        Task<IEnumerable<Agent>> GetAllAsync();
        Task<IEnumerable<Agent>> GetAllAsync(bool connected);
        Task<IEnumerable<Agent>> GetByDepartmentAsync(UtsaDepartment utsaDepartment);
        Task<IEnumerable<Agent>> GetByDepartmentAsync(UtsaDepartment utsaDepartment, bool connected);
        Task<Agent> GetByIdAsync(long id);
        Task AddAsync(Agent agent);
        Task UpdateAsync(Agent agent);
        Task RemoveAsync(Agent agent);

    }
}
