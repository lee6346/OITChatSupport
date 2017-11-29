using System.Collections.Generic;
using System.Threading.Tasks;
using OITChatSupport.Application.Dtos;

namespace OITChatSupport.Infrastructure.Data.Repositories
{
    public interface IAgentRepository
    {
        Task<IList<AgentDto>> GetAllAsync(bool connected);
        Task<AgentDto> GetByIdAsync(string utsaId);
        Task AddAsync(AgentDto agent);
        Task UpdateAsync(AgentDto agent);
    }
}
