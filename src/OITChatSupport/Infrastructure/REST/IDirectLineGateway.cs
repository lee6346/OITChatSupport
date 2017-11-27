using Microsoft.Bot.Connector.DirectLine;
using System.Threading.Tasks;

namespace OITChatSupport.Infrastructure.REST
{
    public interface IDirectLineGateway
    {
        Task<Conversation> GetTokenAsync();

        Task<Conversation> GetConnectionStreamAsync(string conversationId);
    }
}
