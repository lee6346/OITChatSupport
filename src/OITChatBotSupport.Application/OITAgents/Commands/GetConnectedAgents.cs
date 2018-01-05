using MediatR;
using OITChatBotSupport.Infrastructure.Data.InMemory;
using System.Collections.Generic;

namespace OITChatBotSupport.Application.OITAgents.Commands
{
    /// <summary>
    /// Command to retrieve all connected agents
    /// </summary>
    public class GetConnectedAgents: IRequest<List<ConnectedAgent>>
    {
    }
}
