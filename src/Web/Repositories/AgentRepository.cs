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
                    BotHandle = agent.BotHandle
                })
                .FirstOrDefaultAsync();
        }

        public async Task AddAsync(AgentDto agent)
        {
            var newAgent = new Agent
            {
                UtsaId = agent.AgentId,
                Connected = false,
                BotHandle = agent.BotHandle
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
                selectedAgent.Connected = agent.Connected;

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

        public async Task<IList<AgentDto>> GetByDepartmentAsync(string group, bool connected)
        {
            if (connected)
            {
                return await _context
                    .Agents
                    .Where(a => a.BotHandle == group && a.Connected)
                    .Select(agent => new AgentDto
                    {
                        AgentId = agent.UtsaId,
                        Connected = true,
                        BotHandle = agent.BotHandle
                    })
                    .ToListAsync();
            }

            return await _context
                .Agents
                .Where(a => a.BotHandle == group)
                .Select(agent => new AgentDto
                {
                    AgentId = agent.UtsaId,
                    Connected = agent.Connected,
                    BotHandle = agent.BotHandle
                })
                .ToListAsync();
        }

    }
}
