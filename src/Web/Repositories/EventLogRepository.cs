using System;
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
        public async Task<EventLog> GetByIdAsync(long id)
        {
            return await _context.EventLogs.FirstOrDefaultAsync(p => p.Id == id);
        }
        public async Task<IList<EventLog>> GetUnresolvedAsync()
        {
            return await _context.EventLogs.Where(p => p.Resolved == false).ToListAsync();
        }

        public async Task<IList<EventLog>> GetUnresolvedAsync(string level)
        {
            return await _context.EventLogs.Where(p => p.Resolved == false && p.Level == level).ToListAsync();
        }

        public async Task<IList<EventLog>> GetResolvedAsync(DateTime start)
        {
            return await _context.EventLogs.Where(p => p.Resolved && p.Timestamp > start).ToListAsync();
        }

        public async Task<IList<EventLog>> GetResolvedAsync(string level, DateTime start)
        {
            return await _context.EventLogs.Where(p => p.Resolved && p.Level == level && p.Timestamp > start).ToListAsync();
        }

        public async Task UpdateStatusAsync(EventLog eventLog)
        {
            var el = await _context.EventLogs.FirstOrDefaultAsync(p => p.Id == eventLog.Id);
            if (el != null)
            {
                el.Resolved = eventLog.Resolved;
                try
                {
                    _context.EventLogs.Update(el);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateException e)
                {
                    throw e;
                }
            }
        }
        public async Task RemoveAsync(EventLog eventLog)
        {
            var el = await _context.EventLogs.FirstOrDefaultAsync(p => p.Id == eventLog.Id);
            if (el != null)
            {
                try
                {
                    _context.EventLogs.Remove(el);
                    await _context.SaveChangesAsync();
                }
                catch(DbUpdateException e)
                {
                    throw e;
                }
            }
        }
    }
}
