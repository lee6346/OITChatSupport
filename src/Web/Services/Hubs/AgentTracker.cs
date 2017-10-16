using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Services.Hubs
{
    public class AgentTracker<THub>: IAgentTracker<THub>
    {
        private readonly ConcurrentDictionary<HubConnectionContext, AgentDto> _agentsConnected
            = new ConcurrentDictionary<HubConnectionContext, AgentDto>();

        public event Action<AgentDto[]> AgentsJoined;
        public event Action<AgentDto[]> AgentsLeft;

        public Task<IEnumerable<AgentDto>> AgentsOnline(string department)
        {
            return Task.FromResult(_agentsConnected.Values.Where(a => a.UtsaDepartment == department).AsEnumerable());
        }

        public Task AddAgent(HubConnectionContext connection, AgentDto agent)
        {
            
            _agentsConnected.TryAdd(connection, agent);
            AgentsJoined(new[] { agent });
            return Task.CompletedTask;
        }

        public Task RemoveAgent(HubConnectionContext connection)
        {
            if(_agentsConnected.TryRemove(connection, out var agent))
            {
                AgentsLeft(new[] { agent });
            }
            return Task.CompletedTask;
        }


    }
}
