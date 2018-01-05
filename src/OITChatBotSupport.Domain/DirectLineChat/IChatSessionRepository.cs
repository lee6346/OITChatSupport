using System.Threading.Tasks;

namespace OITChatBotSupport.Domain.DirectLineChat
{
    public interface IChatSessionRepository
    {
        Task AddSessionAsync(ChatSession thread);
        Task<ChatSession> GetSessionAsync(string conversationId);
    }
}
