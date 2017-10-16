using Microsoft.Bot.Connector.DirectLine;
using System.Threading.Tasks;
using Web.Repositories;


namespace Web.Services
{
    
    public class BotConnectionService: IBotConnectionService
    {
        private readonly IDirectLineThreadRepository _directLineThreadRepository;
        private readonly DirectLineClient _directLineClient;
        public BotConnectionService(IDirectLineThreadRepository directLineThreadRepository)
        {
            _directLineThreadRepository = directLineThreadRepository;
            _directLineClient = new DirectLineClient();
        }

        public async Task<Conversation> GetTokenAsync(string botHandle)
        {
            var conversation = await _directLineClient.Tokens.GenerateTokenForNewConversationAsync();
            await _directLineThreadRepository.AddAsync(conversation, botHandle);
            return conversation;
        }

        public async Task<Conversation> GetConnectionStreamAsync(string conversationId)
        {
            return await _directLineClient
                .Conversations
                .ReconnectToConversationAsync(conversationId);
        }
    }
}
