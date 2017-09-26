using Domain.Model;
using Domain.Model.Common;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Domain.Repositories
{
    public interface IEventLogRepository
    {
        Task<EventLog> GetByIdAsync(long id);
        Task<IEnumerable<EventLog>> GetUnresolvedAsync();
        Task<IEnumerable<EventLog>> GetUnresolvedAsync(EventType eventType);
        Task<IEnumerable<EventLog>> GetUnresolvedAsync(string level);
        Task<IEnumerable<EventLog>> GetUnresolvedAsync(EventType eventType, string level);
        Task<IEnumerable<EventLog>> GetResolvedAsync(DateTime start, int numDays);
        Task<IEnumerable<EventLog>> GetResolvedAsync(EventType eventType, DateTime start, int numDays);
        Task<IEnumerable<EventLog>> GetResolvedAsync(string level, DateTime start, int numDays);
        Task<IEnumerable<EventLog>> GetResolvedAsync(EventType eventType, string level, DateTime start, int numDays);
        Task UpdateStatusAsync(EventLog eventLog);
        Task RemoveAsync(EventLog eventLog);
    }
}
