using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Data.Context;
using Web.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Web.Repositories
{
    public class EventLogRepository: IEventLogRepository
    {
        private readonly OitChatSupportContext _context;

        public EventLogRepository(OitChatSupportContext context)
        {
            _context = context;
        }

        public async Task<EventLog> GetByIdAsync(int id)
        {
            return await _context
                .EventLogs
                .FirstOrDefaultAsync(log => log.Id == id);
        }

        public async Task<IList<EventLog>> GetUnresolvedAsync()
        {
            return await _context
                .EventLogs
                .Where(log => log.Resolved == false)
                .ToListAsync();
        }

        public async Task UpdateStatusAsync(EventLog eventLog)
        {
            var selectedLog = await _context
                .EventLogs
                .FirstOrDefaultAsync(log => log.Id == eventLog.Id);

            if (selectedLog != null)
            {
                selectedLog.Resolved = eventLog.Resolved;

                try
                {
                    _context.EventLogs.Update(selectedLog);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateException updateException)
                {
                    throw updateException;
                }
            }
        }
    }
}
