using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using OITChatSupport.Dtos;
using Microsoft.Bot.Connector.DirectLine;
using OITChatSupport.Infrastructure.Data.Sql;
using OITChatSupport.Domain.DirectLineChat;

namespace OITChatSupport.Repositories
{
    public class DirectLineThreadRepository: IDirectLineThreadRepository
    {
        private readonly OitChatSupportContext _context;

        public DirectLineThreadRepository(OitChatSupportContext context)
        {
            _context = context;
        }

        public async Task<DirectLineSessionDto> GetByIdAsync(string conversationId)
        {
            return await _context.DirectLineThreads
                .Select(thread => new DirectLineSessionDto
                {
                    ConversationId = thread.ConversationId,
                    TimeCreated = thread.Timestamp
                })
                .FirstOrDefaultAsync(thread => thread.ConversationId == conversationId);

        }

        public async Task AddAsync(Conversation conversation)
        {
            var newThread = new DirectLineThread
            {
                ConversationId = conversation.ConversationId,
                Timestamp = DateTime.UtcNow,
            };
            try
            {
                _context.DirectLineThreads.Add(newThread);
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateException addException)
            {
                throw addException;
            }
        }

        public async Task<IList<DirectLineSessionDto>> GetActive()
        {
            return await _context
                .DirectLineThreads
                .Where(thread => thread.Timestamp == DateTime.Now.Date)
                .Select(thread => new DirectLineSessionDto
                {
                    ConversationId = thread.ConversationId,
                    TimeCreated = thread.Timestamp
                })
                .ToListAsync();
        }
    }
}
