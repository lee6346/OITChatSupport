using CacheManager.Core;
using MediatR;
using Microsoft.Bot.Connector.DirectLine;
using OITChatBotSupport.Application.OITAgents.Commands;
using OITChatBotSupport.Domain.AgentSupport;
using OITChatBotSupport.Infrastructure.Data.InMemory;
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
        private readonly ICacheManager<PendingRequest> _pendingRequests;

        public AcceptTransferHandler(
            IAgentTransferRepository agentTransferRepository,
            IDirectLineGateway directLine, ICacheManager<PendingRequest> pendingRequests)
        {
            _agentTransferRepository = agentTransferRepository;
            _directLine = directLine;
            _pendingRequests = pendingRequests;
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
            _pendingRequests.Remove(message.ConversationId);
            await _agentTransferRepository.UpdateRequestStatusAsync(message.ConversationId, "Accepted", message.AgentId);
            return await _directLine.JoinConversation(message.ConversationId);
        }
    }
}
