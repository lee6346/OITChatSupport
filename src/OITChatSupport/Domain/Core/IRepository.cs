using System.Collections.Generic;

namespace OITChatSupport.Domain.Core
{
    public interface IRepository<TItem, TKey>
    {
        IEnumerable<TItem> GetAll();
        IEnumerable<TItem> Get(string query, object[] @params);
        TItem Find(TKey id);
        void Add(TItem item);
        //void Update(T item);
        //void Remove(T item);
    }
}
