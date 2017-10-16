using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Repositories
{
    public interface IAgentRepository
    {

        Task<IList<AgentDto>> GetByDepartmentAsync(string utsaDepartment, bool connected);
        Task<AgentDto> GetByIdAsync(string utsaId);
        Task AddAsync(AgentDto agent);
        Task UpdateAsync(AgentDto agent);
        Task RemoveAsync(AgentDto agent);

    }
}
