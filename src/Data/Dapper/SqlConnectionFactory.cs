using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace Data.Dapper
{
    public class SqlConnectionFactory: IDbConnectionFactory
    {
        private readonly string _connectionString;
        public SqlConnectionFactory(IConfiguration configuration)
        {
            _connectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=OitChatSupport;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";//configuration.GetValue<string>("LocalDb:ConnectionString");
        }
        public IDbConnection MakeConnection()
        {
            var conn = new SqlConnection(_connectionString);
            conn.Open();
            return conn;
        }
    }
}
