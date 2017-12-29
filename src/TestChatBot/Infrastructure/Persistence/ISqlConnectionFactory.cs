using System.Data;

namespace TestChatBot.Infrastructure.Persistence
{
    public interface ISqlConnectionFactory
    {
        IDbConnection MakeConnection();
    }
}
