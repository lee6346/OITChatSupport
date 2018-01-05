using MediatR;
using Microsoft.Bot.Connector.DirectLine;
using OITChatBotSupport.Application.Student.Commands;
using OITChatBotSupport.Domain.DirectLineChat;
using OITChatBotSupport.Infrastructure.Rest;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace OITChatBotSupport.Application.Student.Handlers
{
    /// <summary>
    /// Receives/handles the StartChatSession request
    /// </summary>
    public class ChatSessionHandler : IRequestHandler<StartChatSession, Conversation>
    {
        private readonly IDirectLineGateway _directLineGateway;
        private readonly IChatSessionRepository _chatSessionRepository;

        public ChatSessionHandler(IDirectLineGateway directLineGateway, IChatSessionRepository chatSessionRepository)
        {
            _directLineGateway = directLineGateway;
            _chatSessionRepository = chatSessionRepository;
        }

        /// <summary>
        /// Retrieve a token and conversation Id to chat with the bot on the direct line channel
        /// Stores the new conversation Id in SQL
        /// </summary>
        /// <param name="request">the StartChatSession request to process</param>
        /// <param name="ct">optional cancellation token</param>
        /// <returns></returns>
        public async Task<Conversation> Handle(StartChatSession request, CancellationToken ct)
        {
            var conversation = await _directLineGateway.StartConversation();
            await _chatSessionRepository.AddSessionAsync(new ChatSession(conversation.ConversationId, DateTime.UtcNow));
            return conversation;
        }
    }
    
}
