using System.Data;

namespace Web.Data.Dapper
{
    public interface ISqlConnectionFactory
    {
        IDbConnection MakeConnection();
    }
}
