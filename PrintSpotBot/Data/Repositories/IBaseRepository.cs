using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrintSpotBot.Data.Repositories
{
    public interface IBaseRepository<TEntity> where TEntity: class
    {
        TEntity Get(int Id);
        Task Add(TEntity entity);
    }
}
