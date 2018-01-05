using OITChatBotSupport.Domain.DirectLineChat;
using OITChatBotSupport.Infrastructure.Data.Sql;
using System.Threading.Tasks;

namespace OITChatBotSupport.Infrastructure.Data.Repositories
{
    public class ChatSessionRepository: SqlRepository<ChatSession>, IChatSessionRepository
    {
        public ChatSessionRepository(ISqlConnectionFactory connectionFactory)
            : base(connectionFactory) { }

        public async Task AddSessionAsync(ChatSession session)
        {
            string sqlCommand = "INSERT INTO DirectLineThread (ConversationId,Created) VALUES (@ConversationId,@Created)";  
            var rowsAffected = await ExecuteAsync(sqlCommand, new { ConversationId=session.Id, Created = session.Created });
        }

        public async Task<ChatSession> GetSessionAsync(string conversationId)
        {
            string sqlQuery = "SELECT ConversationId AS Id, Created FROM DirectLineThread WHERE ConversationId=@Id";
            
            return await FindAsync(sqlQuery, new { Id=conversationId } );
        }
    }
}
