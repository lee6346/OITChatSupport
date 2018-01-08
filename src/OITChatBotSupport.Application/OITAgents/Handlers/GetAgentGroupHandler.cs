using MediatR;
using OITChatBotSupport.Application.OITAgents.Commands;
using OITChatBotSupport.Application.OITAgents.Dtos;
using OITChatBotSupport.Domain.AgentSupport;
using OITChatBotSupport.Infrastructure.Data.InMemory;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OITChatBotSupport.Application.OITAgents.Handlers
{
    public class GetAgentGroupHandler: IRequestHandler<GetAgentGroup, List<AgentDto>>
    {
        private readonly IAgentRepository _agentRepository;
        private readonly IConnectedAgentTracker _connectedAgents;

        public GetAgentGroupHandler(IAgentRepository agentRepository, IConnectedAgentTracker connectedAgents)
        {
            _agentRepository = agentRepository;
            _connectedAgents = connectedAgents;
        }

        public async Task<List<AgentDto>> Handle(GetAgentGroup command, CancellationToken ct)
        {
            var agents = await _agentRepository.GetAgentsAsync(command.Connected);
            return agents.Select(agent => new AgentDto
            {
                Connected=agent.Connected,
                UtsaId=agent.Id
            }).ToList();
        }
    }
}
