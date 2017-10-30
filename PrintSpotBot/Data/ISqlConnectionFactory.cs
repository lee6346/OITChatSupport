
using System.Data;

namespace PrintSpotBot.Data
{
    public interface ISqlConnectionFactory
    {
        IDbConnection MakeConnection();
    }
}
