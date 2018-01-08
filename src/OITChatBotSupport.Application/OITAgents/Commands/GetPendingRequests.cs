using MediatR;
using OITChatBotSupport.Application.OITAgents.Dtos;
using System.Collections.Generic;

namespace OITChatBotSupport.Application.OITAgents.Commands
{
    /// <summary>
    /// Command to retrieve all pending requests for agent transfer
    /// </summary>
    public class GetPendingRequests: IRequest<List<PendingRequestDto>>
    {
    }
}
