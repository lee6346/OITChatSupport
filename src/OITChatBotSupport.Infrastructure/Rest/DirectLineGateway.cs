using Microsoft.Bot.Connector.DirectLine;
using Microsoft.Extensions.Options;
using OITChatBotSupport.Infrastructure.Configuration;
using System.Threading.Tasks;

namespace OITChatBotSupport.Infrastructure.Rest
{
    public class DirectLineGateway: IDirectLineGateway
    {
        private DirectLineClient _directLineClient;

        public DirectLineGateway(IOptions<DirectLineOptions> options)
        {
            _directLineClient = new DirectLineClient(options.Value.Secret);
        }

        public async Task<Conversation> StartConversation()
        {
            return await _directLineClient.Tokens.GenerateTokenForNewConversationAsync();
        }

        public async Task<Conversation> JoinConversation(string conversationId)
        {
            return await _directLineClient.Conversations.ReconnectToConversationAsync(conversationId);
        }
    }
}
