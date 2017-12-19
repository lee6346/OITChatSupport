using MediatR;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Bot.Connector.DirectLine;
using OITChatBotSupport.Application.OITAgents.Commands;
using OITChatBotSupport.Domain.AgentSupport;
using OITChatBotSupport.Infrastructure.RPC;
using System.Threading;
using System.Threading.Tasks;

namespace OITChatBotSupport.Application.OITAgents.Handlers
{
    /// <summary>
    /// Handles command to accept a studen'ts transfer request
    /// </summary>
    public class AcceptTransferHandler : IRequestHandler<AcceptTransfer, Conversation>
    {
        private readonly IAgentTransferRepository _agentTransferRepository;
        private readonly IDirectLineGateway _directLine;
        private readonly IHubContext<AgentHub> _hubContext;

        public AcceptTransferHandler(
            IAgentTransferRepository agentTransferRepository,
            IDirectLineGateway directLine, IHubContext<AgentHub> hubContext)
        {
            _agentTransferRepository = agentTransferRepository;
            _directLine = directLine;
            _hubContext = hubContext;
        }

        /// <summary>
        /// removes the request from cache and updates SQL transfer status
        /// then returns a connection stream to the specified conversation ID to join
        /// </summary>
        /// <param name="message"></param>
        /// <param name="cts"></param>
        /// <returns></returns>
        public async Task<Conversation> Handle(AcceptTransfer message, CancellationToken cts)
        {
            await _agentTransferRepository.UpdateRequestStatusAsync(message.ConversationId, "Accepted", message.AgentId);
            await _hubContext.Clients.Group("UTSA").InvokeAsync("RemoveTransferRequest", new { conversationId = message.ConversationId });
            return await _directLine.JoinConversation(message.ConversationId);
        }
    }
}
