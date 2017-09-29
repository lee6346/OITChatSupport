using Web.Model;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Web.Repositories
{
    public interface IDirectLineSessionRepository
    {
        Task<DirectLineConnection> GetByIdAsync(long id);
        Task AddAsync(DirectLineConnection directLineMessage);
        Task UpdateAsync(DirectLineConnection directLineMessage);
        Task RemoveAsync(DirectLineConnection directLineMessage);
        Task<IEnumerable<DirectLineConnection>> GetAllFromDateAsync(DateTime startDate);
        Task<IEnumerable<DirectLineConnection>> GetAllFromDateAsync(DateTime startDate, bool liveRequest);
        Task<IEnumerable<DirectLineConnection>> GetAllFromDateAsync(DateTime startDate, string botHandle);
        Task<IEnumerable<DirectLineConnection>> GetAllFromDateAsync(DateTime startDate, bool liveRequest, string botHandle);
    }
}
