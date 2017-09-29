using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Data.Context;
using Web.Data.Dapper;
using Web.Models;
using Web.Models.Common;
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
        public async Task<IEnumerable<AgentGroupMessage>> GetByDepartmentAsync(string utsaDepartment)
        {
            return await GetByDepartmentAsync(utsaDepartment, null);
        }
        public async Task<IEnumerable<AgentGroupMessage>> GetByDepartmentAsync(string utsaDepartment, DateTime? start)
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
        public async Task<IEnumerable<AgentGroupMessage>> GetAllAsync()
        {
            return await GetAllAsync(null);
        }
        public async Task<IEnumerable<AgentGroupMessage>> GetAllAsync(DateTime? start)
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
            if(agm )
        }
    }
}
