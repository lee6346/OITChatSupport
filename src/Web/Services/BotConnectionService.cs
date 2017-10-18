using Microsoft.Bot.Connector.DirectLine;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;
using Web.Repositories;
using Web.Services.ConfigBuilder;

namespace Web.Services
{
    
    public class BotConnectionService: IBotConnectionService
    {
        private readonly IDirectLineThreadRepository _directLineThreadRepository;
        private readonly DirectLineClient _directLineClient;

        public BotConnectionService(IDirectLineThreadRepository directLineThreadRepository, IOptions<DirectLineOptions> directLineOptions)
        {
            _directLineThreadRepository = directLineThreadRepository;
            _directLineClient = new DirectLineClient(directLineOptions.Value.Secret);
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
