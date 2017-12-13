using Dapper;
using OITChatBotSupport.Domain.Core.Abstractions;
using OITChatBotSupport.Infrastructure.Data.Sql;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OITChatBotSupport.Infrastructure.Data.Repositories
{ 
    public class SqlRepository<TModel> : IRepository<TModel>
    {
        protected readonly ISqlConnectionFactory _connectionFactory;

        public SqlRepository(ISqlConnectionFactory connectionFactory)
        {
            _connectionFactory = connectionFactory;
        }

        public async Task<IEnumerable<TModel>> GetAsync(string sqlQuery, object param)
        {
            using(var connection = _connectionFactory.Connection)
            {
                var results = await connection.QueryAsync<TModel>(sqlQuery, param);
                connection.Close();
                return results;
            }
        }

        public async Task<TModel> FindAsync(string sqlQuery, object param)
        {
            using (var connection = _connectionFactory.Connection)
            {
                var result = await connection.QueryFirstOrDefaultAsync<TModel>(sqlQuery, param);
                connection.Close();
                return result;
            }
        }

        public async Task<int> ExecuteAsync(string sqlCommand, object param)
        {
            using(var connection = _connectionFactory.Connection)
            {
                var rowsAffected = await connection.ExecuteAsync(sqlCommand, param);
                connection.Close();
                return rowsAffected;
            }
        }
    }
}
