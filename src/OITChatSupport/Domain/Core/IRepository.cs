using System.Collections.Generic;

namespace OITChatSupport.Domain.Core
{
    public interface IRepository<TEntity, TKey>
    {
        IEnumerable<TEntity> GetAll();
        IEnumerable<TEntity> Get(string query, object[] @params);
        TEntity Find(TKey id);
        void Add(TEntity item);
        //void Update(T item);
        //void Remove(T item);
    }
}
