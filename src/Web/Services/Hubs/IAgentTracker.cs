using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Services.Hubs
{
    public interface IAgentTracker<out THub>
    {
        Task<IEnumerable<AgentDto>> AgentsOnline(string department);

        Task AddAgent(HubConnectionContext connection, AgentDto agent);

        Task RemoveAgent(HubConnectionContext connection);

        event Action<AgentDto[]> AgentsJoined;
        event Action<AgentDto[]> AgentsLeft;
    }
}
