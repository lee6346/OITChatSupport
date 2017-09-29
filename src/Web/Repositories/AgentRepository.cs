using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models;
using Microsoft.EntityFrameworkCore;
using Web.Data.Context;

namespace Web.Repositories
{
    public class AgentRepository: IAgentRepository
    {
        private readonly OitChatSupportContext _context;
        public AgentRepository(OitChatSupportContext context)
        {
            _context = context;
        }

        public async Task<Agent> GetByIdAsync(string utsaId)
        {
            return await _context.Agents.FirstOrDefaultAsync(a => a.UtsaId == utsaId);
        }

        public async Task AddAsync(Agent agent)
        {
            try
            {
                _context.Agents.Add(agent);
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateException e)
            {
                throw e;
            }
        }

        public async Task UpdateAsync(Agent agent)
        {
            var ag = await _context.Agents.FirstOrDefaultAsync(a => a.UtsaId == agent.UtsaId);
            if(ag != null)
            {
                ag.UtsaDepartment = agent.UtsaDepartment;
                ag.Connected = agent.Connected;
                try
                {
                    _context.Agents.Update(ag);
                    await _context.SaveChangesAsync();
                }
                catch(DbUpdateException e)
                {
                    throw e;
                }
            }
        }

        public async Task RemoveAsync(Agent agent)
        {
            var ag = await _context.Agents.FirstOrDefaultAsync(a => a.UtsaId == agent.UtsaId);
            if(ag != null)
            {
                try
                {
                    _context.Agents.Remove(ag);
                    await _context.SaveChangesAsync();
                }
                catch(DbUpdateException e)
                {
                    throw e;
                }
            }
        }
        public async Task<IList<Agent>> GetAllAsync()
        {
            return await GetAllAsync(false);
        }
        public async Task<IList<Agent>> GetAllAsync(bool connected)
        {
            if (connected)
            {
                return await _context.Agents.Where(a => a.Connected).ToListAsync();
            }
            return await _context.Agents.ToListAsync();
        }
        public async Task<IList<Agent>> GetByDepartmentAsync(string utsaDepartment)
        {
            return await GetByDepartmentAsync(utsaDepartment, false);
        }
        public async Task<IList<Agent>> GetByDepartmentAsync(string utsaDepartment, bool connected)
        {
            if (connected)
            {
                return await _context.Agents.Where(a => a.UtsaDepartment == utsaDepartment && a.Connected).ToListAsync();
            }
            return await _context.Agents.Where(a => a.UtsaDepartment == utsaDepartment).ToListAsync();
        }
    }
}
