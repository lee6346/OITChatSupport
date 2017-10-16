using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Models;

namespace Web.Repositories
{
    public interface IEventLogRepository
    {
        Task<EventLog> GetByIdAsync(int id);
        Task<IList<EventLog>> GetUnresolvedAsync();
        Task UpdateStatusAsync(EventLog eventLog);
    }
}
