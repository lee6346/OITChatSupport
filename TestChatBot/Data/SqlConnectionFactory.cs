using System;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Web.Configuration;

namespace TestChatBot.Data
{
    public class SqlConnectionFactory : ISqlConnectionFactory
    {
        private readonly string _connectionString;
        public SqlConnectionFactory()
        {
            _connectionString = WebConfigurationManager.ConnectionStrings["sqlConnectionString"].ConnectionString;
        }

        public IDbConnection MakeConnection()
        {
            var factory = DbProviderFactories.GetFactory("System.Data.SqlClient");
            var conn = factory.CreateConnection();
            conn.ConnectionString = _connectionString;
            var connection = new SqlConnection(_connectionString);
            connection.Open();
            return connection;
        }
    }
}