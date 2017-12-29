﻿using MediatR;
using OITChatBotSupport.Application.OITAgents.Commands;
using OITChatBotSupport.Application.OITAgents.Events;
using OITChatBotSupport.Domain.AgentSupport;
using OITChatBotSupport.Infrastructure.Data.InMemory;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace OITChatBotSupport.Application.OITAgents.Handlers
{
    public class AgentConnectionHandler : INotificationHandler<AgentDisconnected>,
        INotificationHandler<AgentConnected>, IRequestHandler<GetConnectedAgents, List<ConnectedAgent>>
    {
        private readonly IAgentRepository _agentRepository;
        private readonly IConnectedAgentTracker _connectedAgents;

        public AgentConnectionHandler(IAgentRepository agentRepository, IConnectedAgentTracker connectedAgents)
        {
            _agentRepository = agentRepository;
            _connectedAgents = connectedAgents;
        }

        public async Task Handle(AgentConnected message, CancellationToken ct)
        {
            await _agentRepository.UpdateAgentConnectionAsync(message.AgentId, true);
        }

        public async Task Handle(AgentDisconnected message, CancellationToken ct)
        {
            await _agentRepository.UpdateAgentConnectionAsync(message.AgentId, false);
        }

        public Task<List<ConnectedAgent>> Handle(GetConnectedAgents message, CancellationToken cts)
        {
            return Task.FromResult(_connectedAgents.GetAgents());
        } 
    }
}
