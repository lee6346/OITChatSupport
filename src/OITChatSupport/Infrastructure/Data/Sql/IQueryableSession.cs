using System.Collections.Generic;
using System.Threading.Tasks;

namespace OITChatSupport.Infrastructure.Data.Sql
{
    public interface IQueryableSession<T>
        where T: class
    {
        IEnumerable<T> Get(string query, object param = null);
        Task<IEnumerable<T>> GetAsync(string query, object param = null);
        T Find(string query, object param = null);
        Task<T> FindAsync(string query, object param = null);
        IEnumerable<T> GetAll();
        IEnumerable<T> GetAllAsync();
    }
}
