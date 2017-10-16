using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models;
using Microsoft.EntityFrameworkCore;
using Web.Data.Context;
using Web.Dtos;

namespace Web.Repositories
{
    public class AgentRepository: IAgentRepository
    {
        private readonly OitChatSupportContext _context;

        public AgentRepository(OitChatSupportContext context)
        {
            _context = context;
        }

        public async Task<AgentDto> GetByIdAsync(string utsaId)
        {
            return await _context
                .Agents
                .Where(a => a.UtsaId == utsaId)
                .Select(agent => new AgentDto
                {
                    AgentId = agent.UtsaId,
                    Connected = agent.Connected,
                    UtsaDepartment = agent.UtsaDepartment
                })
                .FirstOrDefaultAsync();
        }

        public async Task AddAsync(AgentDto agent)
        {
            var newAgent = new Agent
            {
                UtsaId = agent.AgentId,
                Connected = false,
                UtsaDepartment = agent.UtsaDepartment
            };

            try
            {
                _context.Agents.Add(newAgent);
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateException addException)
            {
                throw addException;
            }
        }

        public async Task UpdateAsync(AgentDto agent)
        {
            var selectedAgent = await _context
                .Agents
                .FirstOrDefaultAsync(ag => ag.UtsaId == ag.UtsaId);

            if(selectedAgent != null)
            {
                selectedAgent.UtsaId = agent.AgentId;
                selectedAgent.UtsaDepartment = agent.UtsaDepartment;
                if (!selectedAgent.Connected)
                    selectedAgent.Connected = true;
                else
                    selectedAgent.Connected = false;

                try
                {
                    _context.Agents.Update(selectedAgent);
                    await _context.SaveChangesAsync();
                }
                catch(DbUpdateConcurrencyException concurrencyException)
                {
                    throw concurrencyException;
                }
                catch(DbUpdateException updateException)
                {
                    throw updateException;
                }
            }
        }

        public async Task RemoveAsync(AgentDto agent)
        {
            var selectedAgent = await _context
                .Agents
                .FirstOrDefaultAsync(ag => ag.UtsaId == agent.AgentId);

            if(selectedAgent != null)
            {
                try
                {
                    _context.Agents.Remove(selectedAgent);
                    await _context.SaveChangesAsync();
                }
                catch(DbUpdateException removeException)
                {
                    throw removeException;
                }
            }
        }

        public async Task<IList<AgentDto>> GetByDepartmentAsync(string utsaDepartment, bool connected)
        {
            if (connected)
            {
                return await _context
                    .Agents
                    .Where(a => a.UtsaDepartment == utsaDepartment && a.Connected)
                    .Select(agent => new AgentDto
                    {
                        AgentId = agent.UtsaId,
                        Connected = true,
                        UtsaDepartment = agent.UtsaDepartment
                    })
                    .ToListAsync();
            }

            return await _context
                .Agents
                .Where(a => a.UtsaDepartment == utsaDepartment)
                .Select(agent => new AgentDto
                {
                    AgentId = agent.UtsaId,
                    Connected = agent.Connected,
                    UtsaDepartment = agent.UtsaDepartment
                })
                .ToListAsync();
        }

        public async Task<bool> AnyConnected(string utsaDepartment)
        {
            var count = await _context
                .Agents
                .Where(a => a.UtsaDepartment == utsaDepartment && a.Connected)
                .CountAsync();

            if (count == 0)
                return false;
            return true;
        }
    }
}
