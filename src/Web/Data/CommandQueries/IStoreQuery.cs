using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Web.Data.CommandQueries
{
    public interface IStoreQuery<TEntity>
        where TEntity: class
    {
        Task<TEntity> Get(Expression<Func<TEntity, bool>> expression);
        Task<TEntity> GetAll(Expression<Func<TEntity, bool>> expression);
    }
}
