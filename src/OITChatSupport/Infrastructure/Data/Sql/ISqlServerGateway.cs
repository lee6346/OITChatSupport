using System;
using System.Data;

namespace OITChatSupport.Infrastructure.Data.Sql
{
    public interface ISqlServerGateway: IDisposable
    {
        IDbConnection Connection { get; }
        IDbTransaction StartTransaction();
        T Transaction<T>(Func<IDbTransaction, T> query);
        void Commit();
        void Rollback();
    }
}
