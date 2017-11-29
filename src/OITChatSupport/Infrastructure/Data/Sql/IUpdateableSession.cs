using System.Threading.Tasks;

namespace OITChatSupport.Infrastructure.Data.Sql
{
    public interface IUpdateableSession<T>
        where T : class
    {
        void Remove(T item);
        Task RemoveAsync(T item);
        void Update(T item);
        Task UpdateAsync(T item);
    }
}
