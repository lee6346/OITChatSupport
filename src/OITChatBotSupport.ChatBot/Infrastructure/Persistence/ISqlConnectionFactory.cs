using System.Data;

namespace OITChatBotSupport.ChatBot.Infrastructure.Persistence
{
    public interface ISqlConnectionFactory
    {
        IDbConnection MakeConnection();
    }
}
