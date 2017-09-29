using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Models;

namespace Web.Repositories
{
    public interface IEventLogRepository
    {
        Task<EventLog> GetByIdAsync(long id);
        Task<IList<EventLog>> GetUnresolvedAsync();
        Task<IList<EventLog>> GetUnresolvedAsync(string level);
        Task<IList<EventLog>> GetResolvedAsync(DateTime start);
        Task<IList<EventLog>> GetResolvedAsync(string level, DateTime start);
        Task UpdateStatusAsync(EventLog eventLog);
        Task RemoveAsync(EventLog eventLog);
    }
}
