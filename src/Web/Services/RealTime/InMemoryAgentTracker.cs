using Microsoft.AspNetCore.SignalR;
using Web.Dtos;
using Web.Services.Errors;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.RealTime
{
    public class InMemoryAgentTracker<THub>: IAgentTracker<THub>
    {
        private readonly ConcurrentDictionary<HubConnectionContext, AgentDto> _agentsOnline = new ConcurrentDictionary<HubConnectionContext, AgentDto>();
        public event Action<AgentDto[]> AgentsJoined;
        public event Action<AgentDto[]> AgentsLeft;

        public Task<IEnumerable<AgentDto>> AgentsOnline()
        {
            return AgentsOnline(null);
        }

        public Task<IEnumerable<AgentDto>> AgentsOnline(string department)
        {
            if(department == null)
            {
                return Task.FromResult(_agentsOnline.Values.AsEnumerable());
            }
            return Task.FromResult(_agentsOnline.Values.Where(s => s.Department.ToString() == department));
        }

        public Task AddAgent(HubConnectionContext connection, AgentDto agentDto)
        {
            if (!_agentsOnline.TryAdd(connection, agentDto))
                throw new InMemoryCacheException("Failed to add agents to the in-memory cache");
            AgentsJoined(new[] { agentDto });
            return Task.CompletedTask;

        }
        public Task RemoveAgent(HubConnectionContext connection)
        {
            if(_agentsOnline.TryRemove(connection, out var agentDto))
            {
                AgentsLeft(new[] { agentDto });
                return Task.CompletedTask;
            }
            else
            {
                throw new InMemoryCacheException("Failed to remove agent from the in-memory cache");
            }
        }


        public int Count()
        {
            return Count(null);
        }

        public int Count(string department)
        {
            if(department == null)
            {
                return _agentsOnline.Values.Count;
            }
            return _agentsOnline.Values.Where(s => s.Department.ToString() == department).Count();
        }
    }
}
