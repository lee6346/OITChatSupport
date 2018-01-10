using System.Threading.Tasks;

namespace OITChatBotSupport.Domain.DirectLineChat
{
    /// <summary>
    /// Repository interface to store and retrieve chat session data from persistence
    /// </summary>
    public interface IChatSessionRepository
    {
        /// <summary>
        /// Add new chat session to persistence
        /// </summary>
        /// <param name="thread"><see cref="ChatSession"/> data to store</param>
        /// <returns>Completed Task</returns>
        Task AddSessionAsync(ChatSession thread);

        /// <summary>
        /// Retrieve chat session by conversation ID from persistence
        /// </summary>
        /// <param name="conversationId">the direct line conversation ID</param>
        /// <returns><see cref="ChatSession"/> aggregate of thread information and its messages</returns>
        Task<ChatSession> GetSessionAsync(string conversationId);
    }
}
