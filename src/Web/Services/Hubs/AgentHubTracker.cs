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
                await _context.Groups.AddAsync(connectionId, agent.UtsaDepartment);
                await _context.Clients.Group(agent.UtsaDepartment).InvokeAsync("JoinGroup", agent);
            }
            return success;
        }

        public async Task<bool> RemoveAgent(string connectionId)
        {
            var success = _agentTracker.TryRemove(connectionId, out AgentDto agent);
            if (success)
            {
                await _context.Groups.RemoveAsync(connectionId, agent.UtsaDepartment);
                await _context.Clients.Group(agent.UtsaDepartment).InvokeAsync("LeaveGroup", agent);
            }
            return success;

        }

        public async Task InvokeLiveSupport(string group, SupportTransferDto support)
        {
            await _context.Clients.Group(group).InvokeAsync("RemoveTransferRequest", support);
            
        }

        public async Task InvokeLiveRequest(string group, LiveTransferDto request)
        {
            await _context.Clients.Group(group).InvokeAsync("LiveTransfer", request);
        }

        public async Task InvokeGroupMessage(string group, AgentGroupMessageDto groupMessage)
        {
            await _context.Clients.Group(group).InvokeAsync("Send", groupMessage);
        }

    }
}
