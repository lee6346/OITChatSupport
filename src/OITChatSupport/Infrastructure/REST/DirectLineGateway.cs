using Microsoft.Bot.Connector.DirectLine;
using Microsoft.Extensions.Options;
using System.Threading.Tasks;
using OITChatSupport.Repositories;
using OITChatSupport.Infrastructure.Configuration;

namespace OITChatSupport.Infrastructure.REST
{
    
    public class DirectLineGateway: IDirectLineGateway
    {
        private readonly IDirectLineThreadRepository _directLineThreadRepository;
        private readonly DirectLineClient _directLineClient;

        public DirectLineGateway(IDirectLineThreadRepository directLineThreadRepository, IOptions<DirectLineOptions> directLineOptions)
        {
            _directLineThreadRepository = directLineThreadRepository;
            _directLineClient = new DirectLineClient(directLineOptions.Value.Secret);
        }

        public async Task<Conversation> GetTokenAsync()
        {
            var conversation = await _directLineClient.Tokens.GenerateTokenForNewConversationAsync();
            //await _directLineThreadRepository.AddAsync(conversation);
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
