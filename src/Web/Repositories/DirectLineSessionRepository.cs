using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Data.Dapper;
using Web.Models;

namespace Web.Repositories
{
    public class DirectLineSessionRepository: IDirectLineSessionRepository
    {
        private readonly IDbConnectionFactory _dbConnectionFactory;
        public DirectLineSessionRepository(IDbConnectionFactory dbConnectionFactory)
        {
            _dbConnectionFactory = dbConnectionFactory;
        }
        public async Task<DirectLineConnection> GetByIdAsync(long id)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {
                return null;
            }
        }
        public async Task AddAsync(DirectLineConnection directLineMessage)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
        public async Task UpdateAsync(DirectLineConnection directLineMessage)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
        public async Task RemoveAsync(DirectLineConnection directLineMessage)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
        public async Task<IEnumerable<DirectLineConnection>> GetAllFromDateAsync(DateTime startDate)
        {
            return await GetAllFromDateAsync(startDate, false, null);
        }
        public async Task<IEnumerable<DirectLineConnection>> GetAllFromDateAsync(DateTime startDate, bool liveRequest)
        {
            return await GetAllFromDateAsync(startDate, liveRequest, null);
        }
        public async Task<IEnumerable<DirectLineConnection>> GetAllFromDateAsync(DateTime startDate, string botHandle)
        {
            return await GetAllFromDateAsync(startDate, false, botHandle);
        }
        public async Task<IEnumerable<DirectLineConnection>> GetAllFromDateAsync(DateTime startDate, bool liveRequest, string botHandle)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {
                return null;
            }
        }
    }
}
