using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Models;

namespace Web.Repositories
{
    public interface IAdminRepository
    {

        Task<Admin> GetByIdAsync(string utsaId);
        Task<IList<Admin>> GetAllAsync();
        Task<IList<Admin>> GetAllAsync(bool connected);
        Task AddAsync(Admin admin);
        Task UpdateAsync(Admin admin);
        Task RemoveAsync(Admin admin);
    }
}
