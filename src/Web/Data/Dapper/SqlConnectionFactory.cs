using Microsoft.Extensions.Options;
using System.Data;
using System.Data.SqlClient;
using Web.Services.ConfigBuilder;

namespace Web.Data.Dapper
{
    public class SqlConnectionFactory
    {
        private readonly string _connectionString;
        public SqlConnectionFactory(IOptions<DataConnectionOptions> configOptions)
        {
            _connectionString = configOptions.Value.LocalDbConnectionString;
        }
        public IDbConnection MakeConnection()
        {
            var connection = new SqlConnection(_connectionString);
            try
            {
                connection.Open();
                return connection;
            }
            catch(SqlException e)
            {
                throw e;
            }
        }
    }
}
