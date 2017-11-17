using System.Threading.Tasks;

namespace Web.Data.CommandQueries
{
    public interface IStoreCommand<TEntity>
        where TEntity: class
    {
        Task<bool> Execute(TEntity entity);
    }
}
