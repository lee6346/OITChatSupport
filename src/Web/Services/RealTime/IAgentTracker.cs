using Microsoft.AspNetCore.SignalR;
using OITChatSupport.Web.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OITChatSupportWeb.Services.RealTime
{
    public interface IAgentTracker<out THub>
    {
        Task<IEnumerable<AgentDto>> AgentsOnline();
        Task<IEnumerable<AgentDto>> AgentsOnline(string department);
        Task AddAgent(HubConnectionContext connection, AgentDto agentDto);
        Task RemoveAgent(HubConnectionContext connection);

        event Action<AgentDto[]> AgentsJoined;
        event Action<AgentDto[]> AgentsLeft;
    }
}
