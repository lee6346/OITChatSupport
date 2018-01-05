using System.Data;

namespace OITChatBotSupport.Infrastructure.Data.Sql
{
    public interface ISqlConnectionFactory
    {
        IDbConnection Connection { get; }
    }
}
