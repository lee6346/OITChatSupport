using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OITChatSupport.Infrastructure.Data.Sql
{
    public interface IWritableSession<T>
        where T: class
    {
        void Add(T item);
        Task AddAsync(T item);
    }
}
