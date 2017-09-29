using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Data.Dapper;
using Web.Models;
using Web.Models.Common;

namespace Web.Repositories
{
    public class DirectLineMessageRepository: IDirectLineMessageRepository
    {
        private readonly IDbConnectionFactory _dbConnectionFactory;
        public DirectLineMessageRepository(IDbConnectionFactory dbConnectionFactory)
        {
            _dbConnectionFactory = dbConnectionFactory;
        }
        public async Task<DirectLineMessage> GetByIdAsync(long id)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {
                return null;
            }
        }
        public async Task AddAsync(DirectLineMessage directLineMessage)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
        public async Task UpdateAsync(DirectLineMessage directLineMessage)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
        public async Task RemoveAsync(DirectLineMessage directLineMessage)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
        public async Task<IEnumerable<DirectLineMessage>> GetAllFromDateAsync(DateTime startDate, int numDays)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {
                return null;
            }
        }
        public async Task<IEnumerable<DirectLineMessage>> GetMessagesByConversationAsync(string conversationId)
        {
            return await GetMessagesByConversationAsync(conversationId, null);
        }
        public async Task<IEnumerable<DirectLineMessage>> GetMessagesByConversationAsync(string conversationId, ChatParticipant? chatParticipant)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {
                return null;
            }
        }
        public async Task<IEnumerable<DirectLineMessage>> GetMessagesByAgentAsync(string utsaId)
        {
            return await GetMessagesByAgentAsync(utsaId, null, null, 0);
        }
        public async Task<IEnumerable<DirectLineMessage>> GetMessagesByAgentAsync(string utsaId, ChatParticipant? chatParticipant)
        {
            return await GetMessagesByAgentAsync(utsaId, chatParticipant, null, 0);
        }
        public async Task<IEnumerable<DirectLineMessage>> GetMessagesByAgentAsync(string utsaId, ChatParticipant? chatParticipant, DateTime? start, int numDays)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {
                return null;
            }
        }
        public async Task<IEnumerable<DirectLineMessage>> GetMessagesByBotAsync(string botHandle)
        {
            return await GetMessagesByBotAsync(botHandle, null, null, 0);
        }
        public async Task<IEnumerable<DirectLineMessage>> GetMessagesByBotAsync(string botHandle, ChatParticipant? chatParticipant)
        {
            return await GetMessagesByBotAsync(botHandle, chatParticipant, null, 0);
        }
        public async Task<IEnumerable<DirectLineMessage>> GetMessagesByBotAsync(string botHandle, ChatParticipant? chatParticipant, DateTime? start, int numDays)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {
                return null;
            }
        }
    }
}
