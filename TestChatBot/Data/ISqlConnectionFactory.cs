
using System.Data;

namespace TestChatBot.Data
{
    public interface ISqlConnectionFactory
    {
        IDbConnection MakeConnection();
    }
}
