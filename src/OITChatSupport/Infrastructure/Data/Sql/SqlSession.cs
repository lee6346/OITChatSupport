using Dapper;
using System.Collections.Generic;

namespace OITChatSupport.Infrastructure.Data.Sql
{
    public class SqlSession: ISqlSession
    {
        private readonly ISqlServerGateway _sqlServerGateway;
        public SqlSession(ISqlServerGateway sqlServerGateway)
        {
            _sqlServerGateway = sqlServerGateway;
        }

        public SqlSession(string connectionString)
        {
            _sqlServerGateway = new SqlServerGateway(connectionString);
        }
        public virtual IEnumerable<T> Query<T>(string query, object param)
        {
            return _sqlServerGateway.Transaction(transaction =>
            {
                var result = _sqlServerGateway.Connection.Query<T>(query, param, transaction);
                return result;
            });
        }
        public void Execute(string sqlCommand, object param)
        {
           // _sqlServerGateway.
        }

    }
}
