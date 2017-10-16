using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Data.Context;
using Web.Models;
using Microsoft.EntityFrameworkCore;

namespace Web.Repositories
{
    
    public class GroupMessageRepository: IGroupMessageRepository
    {
        private readonly OitChatSupportContext _context;

        public GroupMessageRepository(OitChatSupportContext context)
        {
            _context = context;
        }

        public async Task<IList<AgentGroupMessage>> GetAllAsync(string group)
        {
                return await _context
                    .AgentGroupMessages
                    .Where(message => message.TimeSent == DateTime.Now.Date)
                    .ToListAsync();
        }

        public async Task AddAsync(AgentGroupMessage agentGroupMessage)
        {
            try
            {
                _context.AgentGroupMessages.Add(agentGroupMessage);
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateException addException)
            {
                throw addException;
            }
        }
    }
}
