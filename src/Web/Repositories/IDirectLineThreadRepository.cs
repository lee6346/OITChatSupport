using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Dtos;
using Web.Models;

namespace Web.Repositories
{
    public interface IDirectLineThreadRepository
    {
        Task<DirectLineThreadDto> GetByIdAsync(string conversationId);
        Task AddAsync(DirectLineThreadDto directLineThread);
        Task<IList<DirectLineThreadDto>> GetActive();
    }
}
