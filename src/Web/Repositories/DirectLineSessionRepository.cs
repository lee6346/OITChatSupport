using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Data.Context;
using Web.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Web.Repositories
{
    public class DirectLineSessionRepository: IDirectLineSessionRepository
    {
        private readonly OitChatSupportContext _context;
        public DirectLineSessionRepository(OitChatSupportContext context)
        {
            _context = context;
        }
        public async Task<IList<DirectLineConnection>> GetByIdAsync(string conversationId)
        {
            return await _context.DirectLineConnections.Where(a => a.ConversationId == conversationId).ToListAsync();
        }
        public async Task AddAsync(DirectLineConnection directLineConnection)
        {
            try
            {
                _context.DirectLineConnections.Add(directLineConnection);
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateException e)
            {
                throw e;
            }
        }
        public async Task UpdateAsync(DirectLineConnection directLineConnection)
        {
            var dlc = await _context.DirectLineConnections
                .FirstOrDefaultAsync(a => a.Id== directLineConnection.Id);
            if(dlc != null)
            {
                dlc.ConversationId = directLineConnection.ConversationId;
                dlc.TimeDisconnected = directLineConnection.TimeDisconnected;
                try
                {
                    _context.DirectLineConnections.Update(dlc);
                    await _context.SaveChangesAsync();
                }
                catch(DbUpdateException e)
                {
                    throw e;
                }
            }

        }
        public async Task RemoveAsync(DirectLineConnection directLineConnection)
        {
            var dlc = await _context.DirectLineConnections
                .FirstOrDefaultAsync(a => a.Id == directLineConnection.Id);
            if(dlc != null)
            {
                try
                {
                    _context.DirectLineConnections.Remove(directLineConnection);
                    await _context.SaveChangesAsync();
                }
                catch(DbUpdateException e)
                {
                    throw e;
                }
            }
        }

        public async Task<IList<DirectLineConnection>> GetAllFromDateAsync(DateTime startDate)
        {
            return await _context.DirectLineConnections.Where(p => p.TimeConnected > startDate).ToListAsync();
        }
        /*
        public async Task<IList<DirectLineConnection>> GetAllFromDateAsync(DateTime startDate, bool liveRequest)
        {
        }
        */

    }
}
