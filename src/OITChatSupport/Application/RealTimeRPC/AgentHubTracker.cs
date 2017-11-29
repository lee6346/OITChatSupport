using Microsoft.AspNetCore.SignalR;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OITChatSupport.Application.Dtos;

namespace OITChatSupport.Application.RealTimeRPC
{
    public class AgentHubTracker: IAgentHubTracker
    {
        private IHubContext<AgentHub> _context;
        private readonly ConcurrentDictionary<string, AgentDto> _agentTracker 
            = new ConcurrentDictionary<string, AgentDto>();

        public AgentHubTracker(IHubContext<AgentHub> context) {
            _context = context;
        }

        public Task<IEnumerable<AgentDto>> AgentsOnline()
        {
            return Task.FromResult(_agentTracker.Values.AsEnumerable());
        }

        public async Task<bool> AddAgent(string connectionId, AgentDto agent)
        {
            var success = _agentTracker.TryAdd(connectionId, agent);
            if (success)
            {
                await _context.Groups.AddAsync(connectionId, "OITChatSupport");
                await _context.Clients.Group("OITChatSupport").InvokeAsync("JoinGroup", agent);
            }
            return success;
        }

        public async Task<bool> RemoveAgent(string connectionId)
        {
            var success = _agentTracker.TryRemove(connectionId, out AgentDto agent);
            if (success)
            {
                await _context.Groups.RemoveAsync(connectionId, "OITChatSupport");
                await _context.Clients.Group("OITChatSupport").InvokeAsync("LeaveGroup", agent);
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
            await _context.Clients.Group("OITChatSupport").InvokeAsync("RemoveTransferRequest", liveSupport);
        }

        public async Task InvokeLiveRequest(LiveTransferDto request)
        {
            await _context.Clients.Group("OITChatSupport").InvokeAsync("LiveTransfer", request);
        }
    }
}
