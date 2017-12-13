using Microsoft.Bot.Connector.DirectLine;
using System.Threading.Tasks;

namespace OITChatBotSupport.Infrastructure.RPC
{
    public interface IDirectLineGateway
    {
        Task<Conversation> StartConversation();
        Task<Conversation> JoinConversation(string conversationId);
    }
}
