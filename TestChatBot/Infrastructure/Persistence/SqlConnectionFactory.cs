using System.Configuration;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;

namespace OITChatBot.Infrastructure.Persistence
{
    public class SqlConnectionFactory : ISqlConnectionFactory
    {
        private readonly string _connectionString;
        public SqlConnectionFactory()
        {
            _connectionString = ConfigurationManager.ConnectionStrings["SqlConnectionString"].ConnectionString;
        }

        public IDbConnection MakeConnection()
        {
            var connection = new SqlConnection(_connectionString);
            connection.Open();
            return connection;
        }
    }
}