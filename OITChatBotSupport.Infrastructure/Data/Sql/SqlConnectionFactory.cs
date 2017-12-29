using Microsoft.Extensions.Options;
using OITChatBotSupport.Infrastructure.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace OITChatBotSupport.Infrastructure.Data.Sql
{
    public class SqlConnectionFactory: ISqlConnectionFactory
    {
        private readonly string connectionString;

        public SqlConnectionFactory(IOptions<SqlServerOptions> options)
        {
            connectionString = options.Value.LocalConnectionString;
        }

        public IDbConnection Connection
        {
            get
            {
                var connection = new SqlConnection(connectionString);
                connection.Open();
                return connection;
            }
        }
    }
}
