using Dapper.Contrib.Extensions;
using System.Threading.Tasks;
using Web.Data.Dapper;

namespace Web.Data.CommandQueries
{
    public class StoreCommand<TEntity>: IStoreCommand<TEntity>
        where TEntity: class
    {
        private readonly ISqlConnectionFactory _sqlConnectionFactory;
        
        public StoreCommand(ISqlConnectionFactory sqlConnectionFactory)
        {
            _sqlConnectionFactory = sqlConnectionFactory;
        }

        public Task<bool> Execute(TEntity entity)
        {
            using(var connection = _sqlConnectionFactory.MakeConnection())
            {
                var result = connection.Insert(entity);
                return Task.FromResult(result > 0);
            }
        }
    }
}
