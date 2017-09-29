﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models;
using Web.Models.Common;
using Web.Data.Dapper;
namespace Web.Repositories
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
                return null;
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
                return null;
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