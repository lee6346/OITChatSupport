using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Services.Hubs
{
    public class AgentHubTracker: IAgentHubTracker
    {
        private IHubContext<AgentHub> _context;
        private readonly ConcurrentDictionary<string, AgentDto> _agentTracker 
            = new ConcurrentDictionary<string, AgentDto>();

        public AgentHubTracker(IHubContext<AgentHub> context) {
            _context = context;
        }

        public Task<IEnumerable<AgentDto>> AgentsOnline(string botHandle)
        {
            return Task.FromResult(
                _agentTracker.Values.Where(
                    agent => agent.BotHandle == botHandle)
                    .AsEnumerable());
        }

        public async Task<bool> AddAgent(string connectionId, AgentDto agent)
        {
            var success = _agentTracker.TryAdd(connectionId, agent);
            if (success)
            {
                await _context.Groups.AddAsync(connectionId, agent.BotHandle);
                await _context.Clients.Group(agent.BotHandle).InvokeAsync("JoinGroup", agent);
            }
            return success;
        }

        public async Task<bool> RemoveAgent(string connectionId)
        {
            var success = _agentTracker.TryRemove(connectionId, out AgentDto agent);
            if (success)
            {
                await _context.Groups.RemoveAsync(connectionId, agent.BotHandle);
                await _context.Clients.Group(agent.BotHandle).InvokeAsync("LeaveGroup", agent);
            }
            return success;

        }

        public async Task<bool> RemoveAgent(AgentDto agent)
        {
            var connection = _agentTracker.FirstOrDefault(a => a.Value.AgentId == agent.AgentId).Key;
            return await RemoveAgent(connection);

        }

        public async Task InvokeLiveSupport(LiveTransferDto liveSupport)
        {
            await _context.Clients.Group(liveSupport.BotHandle).InvokeAsync("RemoveTransferRequest", liveSupport);
            
        }

        public async Task InvokeLiveRequest(LiveTransferDto request)
        {
            await _context.Clients.Group(request.BotHandle).InvokeAsync("LiveTransfer", request);
        }

    }
}
