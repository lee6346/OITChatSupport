using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Models;

namespace Web.Repositories
{
    public interface IDirectLineSessionRepository
    {
        Task<IList<DirectLineThread>> GetByIdAsync(string conversationId);
        Task AddAsync(DirectLineThread directLineConnection);
        Task UpdateAsync(DirectLineThread directLineConnection);
        Task RemoveAsync(DirectLineThread directLineConnection);
        Task<IList<DirectLineThread>> GetAllFromDateAsync(DateTime startDate);
        //Task<IEnumerable<DirectLineConnection>> GetAllFromDateAsync(DateTime startDate, bool liveRequest);
    }
}
