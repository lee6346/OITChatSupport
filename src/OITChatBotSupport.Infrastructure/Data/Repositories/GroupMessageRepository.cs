using OITChatBotSupport.Domain.AgentSupport;
using OITChatBotSupport.Infrastructure.Data.Sql;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OITChatBotSupport.Infrastructure.Data.Repositories
{
    public class GroupMessageRepository: SqlRepository<GroupMessage>, IGroupMessageRepository
    {
        public GroupMessageRepository(ISqlConnectionFactory connectionFactory) : base(connectionFactory) { }

        public async Task<IEnumerable<GroupMessage>> GetGroupMessagesAsync()
        {
            string sqlQuery = "SELECT From, Text, Timestamp FROM GroupMessage WHERE Timestamp<=@Today";
            var results = await GetAsync(sqlQuery, new { Today = DateTimeOffset.UtcNow });
            return results;
        }

        public async Task AddGroupMessageAsync(GroupMessage message)
        {
            string sqlCommand = "INSERT INTO GroupMessage (From,Text,Timestamp) VALUES (@From,@Text,@Timestamp)";
            var rowsAffected = await ExecuteAsync(sqlCommand, message);
        }
    }
}
