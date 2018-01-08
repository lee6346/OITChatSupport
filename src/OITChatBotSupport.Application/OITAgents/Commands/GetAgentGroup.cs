using MediatR;
using OITChatBotSupport.Application.OITAgents.Dtos;
using System.Collections.Generic;

namespace OITChatBotSupport.Application.OITAgents.Commands
{
    public class GetAgentGroup: IRequest<List<AgentDto>>
    {
        public GetAgentGroup(bool connected)
        {
            Connected = connected;
        }

        public bool Connected { get; set; }
    }
}
