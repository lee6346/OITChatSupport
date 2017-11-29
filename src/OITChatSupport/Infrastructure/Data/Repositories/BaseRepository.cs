using OITChatSupport.Domain.Core;
using OITChatSupport.Infrastructure.Data.Sql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OITChatSupport.Infrastructure.Data.Repositories
{
    public class BaseRepository<TItem, TKey>: IRepository<TItem, TKey>, IDisposable
        where TItem: class
    {
        protected ISqlServerGateway _gateway;
        public BaseRepository(string connectionString)
        {
            _gateway = new SqlServerGateway(connectionString);
        }

        protected void Add(TItem item)
        {

        }

        protected TItem Find(TKey key)
        {
            string query = @"SELECT * FROM "
        }
    }
}
