using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Data.Context;
using Web.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Web.Dtos;
using Microsoft.Bot.Connector.DirectLine;

namespace Web.Repositories
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
                    BotHandle = thread.BotHandle,
                    ConversationId = thread.ConversationId,
                    TimeCreated = thread.TimeCreated
                })
                .FirstOrDefaultAsync(thread => thread.ConversationId == conversationId);

        }

        public async Task AddAsync(Conversation conversation, string botHandle)
        {
            var newThread = new DirectLineThread
            {
                ConversationId = conversation.ConversationId,
                TimeCreated = DateTime.UtcNow,
                BotHandle = botHandle

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
                .Where(thread => thread.TimeCreated == DateTime.Now.Date)
                .Select(thread => new DirectLineSessionDto
                {
                    ConversationId = thread.ConversationId,
                    BotHandle = thread.BotHandle,
                    TimeCreated = thread.TimeCreated
                })
                .ToListAsync();
        }
    }
}
