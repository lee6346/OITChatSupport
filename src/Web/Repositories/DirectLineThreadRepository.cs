using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Data.Context;
using Web.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Web.Repositories
{
    public class DirectLineThreadRepository: IDirectLineThreadRepository
    {
        private readonly OitChatSupportContext _context;

        public DirectLineThreadRepository(OitChatSupportContext context)
        {
            _context = context;
        }

        public async Task<IList<DirectLineThread>> GetByIdAsync(string conversationId)
        {
            return await _context.DirectLineThreads
                .Where(thread => thread.ConversationId == conversationId)
                .ToListAsync();
        }

        public async Task AddAsync(DirectLineThread directLineThread)
        {
            try
            {
                _context.DirectLineThreads.Add(directLineThread);
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateException addException)
            {
                throw addException;
            }
        }

        public async Task<IList<DirectLineThread>> GetActive()
        {
            return await _context
                .DirectLineThreads
                .Where(thread => thread.TimeCreated == DateTime.Now.Date)
                .ToListAsync();
        }
    }
}
