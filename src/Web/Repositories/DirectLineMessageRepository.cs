using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Models;
using Microsoft.EntityFrameworkCore;
using Web.Data.Context;
using System.Linq;

namespace Web.Repositories
{
    public class DirectLineMessageRepository: IDirectLineMessageRepository
    {
        private readonly OitChatSupportContext _context;

        public DirectLineMessageRepository(OitChatSupportContext context)
        {
            _context = context;
        }

        public async Task AddAsync(DirectLineMessage directLineMessage)
        {
            try
            {
                _context.DirectLineMessages.Add(directLineMessage);
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateException addException)
            {
                throw addException;
            }
        }

        public async Task<IList<DirectLineMessage>> GetConversationLogAsync(string conversationId)
        {
            return await _context
                .DirectLineMessages
                .Where(a => a.ConversationId == conversationId)
                .ToListAsync();
        }

        public async Task<IList<DirectLineMessage>> GetAgentLogAsync(string utsaId)
        {
                return await _context
                    .DirectLineMessages
                    .Where(message => message.Sender == utsaId && message.TimeSent == DateTime.Now.Date)
                    .ToListAsync();
          
        }
    }
}
