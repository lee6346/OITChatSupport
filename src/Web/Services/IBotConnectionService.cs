using Microsoft.Bot.Connector.DirectLine;
using System.Threading.Tasks;

namespace Web.Services
{
    public interface IBotConnectionService
    {
        Task<Conversation> GetTokenAsync(string botHandle);

        Task<Conversation> GetConnectionStreamAsync(string conversationId);
    }
}
