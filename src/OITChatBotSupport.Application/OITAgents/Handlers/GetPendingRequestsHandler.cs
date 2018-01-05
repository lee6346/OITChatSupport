using MediatR;
using OITChatBotSupport.Application.OITAgents.Commands;
using OITChatBotSupport.Domain.AgentSupport;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OITChatBotSupport.Application.OITAgents.Handlers
{
    public class GetPendingRequestsHandler: IRequestHandler<GetPendingRequests, List<GetPendingRequestResponse>>
    {
        private readonly IAgentTransferRepository _transferRepository;
        public GetPendingRequestsHandler(IAgentTransferRepository transferRepository)
        {
            _transferRepository = transferRepository;
        }
        public async Task<List<GetPendingRequestResponse>> Handle(GetPendingRequests message, CancellationToken ct)
        {
            var results = await _transferRepository.GetWaitingRequestsAsync();
            return results.Select(request => new GetPendingRequestResponse
            {
                ConversationId = request.Id,
                BotHandle = request.BotHandle,
                LastMessage = request.LastMessage,
                Requested = request.Requested
            }).ToList();
        }
    }
}
