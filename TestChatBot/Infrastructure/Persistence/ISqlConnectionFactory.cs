using System.Data;

namespace OITChatBot.Infrastructure.Persistence
{
    public interface ISqlConnectionFactory
    {
        IDbConnection MakeConnection();
    }
}
