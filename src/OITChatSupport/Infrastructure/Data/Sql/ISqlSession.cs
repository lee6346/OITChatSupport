using System.Collections.Generic;

namespace OITChatSupport.Infrastructure.Data.Sql
{
    public interface ISqlSession
    {
        IEnumerable<T> Query<T>(string query, object param = null);
        void Execute(string command, object param = null);
    }
}
