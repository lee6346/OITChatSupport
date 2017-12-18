﻿using System.Collections.Generic;
using System.Threading.Tasks;
using OITChatSupport.Application.Dtos;

namespace OITChatSupport.Application.RealTimeRPC
{
    public interface IAgentHubTracker
    {
        Task<IEnumerable<AgentDto>> AgentsOnline();

        Task<bool> AddAgent(string connectionId, AgentDto agent);

        Task<bool> RemoveAgent(string connectionId);

        Task<bool> RemoveAgent(AgentDto agent);

        Task InvokeLiveSupport(LiveTransferDto liveSupport);

        Task InvokeLiveRequest(LiveTransferDto request);

    }
}