using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Data.Context;
using Web.Models;
using Microsoft.EntityFrameworkCore;

namespace Web.Repositories
{
    
    public class AgentGroupMessageRepository: IAgentGroupMessageRepository
    {
        private readonly OitChatSupportContext _context;
        public AgentGroupMessageRepository(OitChatSupportContext context)
        {
            _context = context;
        }
        public async Task<IList<AgentGroupMessage>> GetByDepartmentAsync(string utsaDepartment)
        {
            return await GetByDepartmentAsync(utsaDepartment, null);
        }
        public async Task<IList<AgentGroupMessage>> GetByDepartmentAsync(string utsaDepartment, DateTime? start)
        {
            if(start == null)
            {
                return await _context.AgentGroupMessages.Where(a => a.UtsaDepartment == utsaDepartment).ToListAsync();
            }
            else
            {
                return await _context.AgentGroupMessages
                    .Where(a => a.UtsaDepartment == utsaDepartment && a.TimeSent > start)
                    .ToListAsync();
            }

        }
        public async Task<IList<AgentGroupMessage>> GetAllAsync()
        {
            return await GetAllAsync(null);
        }
        public async Task<IList<AgentGroupMessage>> GetAllAsync(DateTime? start)
        {
            if(start == null)
            {
                return await _context.AgentGroupMessages.ToListAsync();
            }
            else
            {
                return await _context.AgentGroupMessages.Where(a => a.TimeSent > start).ToListAsync();
            }
        }
        public async Task AddAsync(AgentGroupMessage agentGroupMessage)
        {
            try
            {
                _context.AgentGroupMessages.Add(agentGroupMessage);
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateException e)
            {
                throw e;
            }
        }
        public async Task UpdateAsync(AgentGroupMessage agentGroupMessage)
        {
            var agm = await _context.AgentGroupMessages.FirstOrDefaultAsync(a => a.Id == agentGroupMessage.Id);
            if(agm != null)
            {
                agm.Sender = agentGroupMessage.Sender;
                agm.Text = agentGroupMessage.Text;
                agm.UtsaDepartment = agentGroupMessage.UtsaDepartment;
                agm.TimeSent = agentGroupMessage.TimeSent;
                try
                {
                    _context.AgentGroupMessages.Update(agm);
                    await _context.SaveChangesAsync();
                }
                catch(DbUpdateException e)
                {
                    throw e;
                }
            }
        }
        public async Task RemoveAsync(AgentGroupMessage agentGroupMessage)
        {
            var agm = await _context.AgentGroupMessages.FirstOrDefaultAsync(a => a.Id == agentGroupMessage.Id);
            if(agm != null)
            {
                try
                {
                    _context.AgentGroupMessages.Remove(agm);
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
