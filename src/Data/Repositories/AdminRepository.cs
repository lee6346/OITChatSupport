using Data.Dapper;
using Domain.Model;
using Domain.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public class AdminRepository: IAdminRepository
    {
        private readonly IDbConnectionFactory _dbConnectionFactory;
        public AdminRepository(IDbConnectionFactory dbConnectionFactory)
        {
            _dbConnectionFactory = dbConnectionFactory;
        }
        public async Task<Admin> GetByIdAsync(string utsaId)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
        public async Task<IEnumerable<Admin>> GetAllAsync()
        {
            return await GetAllAsync(false);
        }
        public async Task<IEnumerable<Admin>> GetAllAsync(bool connected)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
        public async Task AddAsync(Admin admin)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
        public async Task UpdateAsync(Admin admin)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
        public async Task RemoveAsync(Admin admin)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
    }
}
