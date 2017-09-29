using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Data.Dapper;
using Web.Models;
using Web.Models.Common;

namespace Web.Repositories
{
    
    public class AgentGroupMessageRepository: IAgentGroupMessageRepository
    {
        private readonly IDbConnectionFactory _dbConnectionFactory;
        public AgentGroupMessageRepository(IDbConnectionFactory dbConnectionFactory)
        {
            _dbConnectionFactory = dbConnectionFactory;
        }
        public async Task<IEnumerable<AgentGroupMessage>> GetByDepartmentAsync(UtsaDepartment utsaDepartment)
        {
            return await GetByDepartmentAsync(utsaDepartment, null, 0);
        }
        public async Task<IEnumerable<AgentGroupMessage>> GetByDepartmentAsync(UtsaDepartment utsaDepartment, DateTime? start, int numOfDays)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {
                return null;
            }
        }
        public async Task<IEnumerable<AgentGroupMessage>> GetAllAsync()
        {
            return await GetAllAsync(null, 0);
        }
        public async Task<IEnumerable<AgentGroupMessage>> GetAllAsync(DateTime? start, int numOfDays)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {
                return null;
            }
        }
        public async Task AddAsync(AgentGroupMessage agentGroupMessage)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
        public async Task UpdateAsync(AgentGroupMessage agentGroupMessage)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
        public async Task RemoveAsync(AgentGroupMessage agentGroupMessage)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
    }
}
