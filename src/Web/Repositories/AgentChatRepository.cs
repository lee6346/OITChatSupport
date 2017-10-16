using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Data.Context;
using Microsoft.EntityFrameworkCore;
using Web.Dtos;
using Web.Models;

namespace Web.Repositories
{
    
    public class AgentChatRepository: IAgentChatRepository
    {
        private readonly OitChatSupportContext _context;

        public AgentChatRepository(OitChatSupportContext context)
        {
            _context = context;
        }

        public async Task<IList<GroupMessageDto>> GetMessages(string group)
        {
                return await _context
                    .AgentGroupMessages
                    .Where(message => message.TimeSent == DateTime.Now.Date && message.Group == group)
                    .Select(message => new GroupMessageDto
                    {
                        AgentId = message.Sender,
                        Group = message.Group,
                        Text = message.Text,
                        TimeStamp = message.TimeSent
                    })
                    .ToListAsync();
        }

        public async Task AddMessage(GroupMessageDto groupMessage)
        {
            var message = new GroupMessage
            {
                Sender = groupMessage.AgentId,
                Group = groupMessage.Group,
                Text = groupMessage.Text,
                TimeSent = DateTime.UtcNow
            };

            try
            {
                _context.AgentGroupMessages.Add(message);
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateException addException)
            {
                throw addException;
            }
        }

        public Task CreateThread()
        {
            return Task.CompletedTask;
        }

        public Task UpdateThread()
        {
            return Task.CompletedTask;
        }
    }
}
