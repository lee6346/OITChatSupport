using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Models;

namespace Web.Repositories
{
    public interface IDirectLineSessionRepository
    {
        Task<IList<DirectLineConnection>> GetByIdAsync(string conversationId);
        Task AddAsync(DirectLineConnection directLineConnection);
        Task UpdateAsync(DirectLineConnection directLineConnection);
        Task RemoveAsync(DirectLineConnection directLineConnection);
        Task<IList<DirectLineConnection>> GetAllFromDateAsync(DateTime startDate);
        //Task<IEnumerable<DirectLineConnection>> GetAllFromDateAsync(DateTime startDate, bool liveRequest);
    }
}
