using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PrintSpotBot.Data.Repositories
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity: class
    {
        public virtual TEntity Get(int id)
        {
            throw new NotImplementedException();
        }

        public virtual Task Add(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public virtual Task Remove(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public virtual Task Update(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public virtual IEnumerable<TEntity> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}