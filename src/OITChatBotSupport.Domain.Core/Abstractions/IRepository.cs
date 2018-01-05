using System.Collections.Generic;
using System.Threading.Tasks;

namespace OITChatBotSupport.Domain.Core.Abstractions
{
    public interface IRepository<TModel>
    {
        Task<IEnumerable<TModel>> GetAsync(string query, object param);

        Task<TModel> FindAsync(string sqlQuery, object param);

        Task<int> ExecuteAsync(string sqlCommand, object param);

    }
}
