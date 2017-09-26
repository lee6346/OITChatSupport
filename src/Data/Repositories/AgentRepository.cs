using Domain.Model;
using Domain.Model.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using Data.Dapper;
using Domain.Repositories;
using Dapper.Contrib.Extensions;
using Data.Errors;

namespace Data.Repositories
{
    public class AgentRepository: IAgentRepository
    {
        private readonly IDbConnectionFactory _dbConnectionFactory;
        public AgentRepository(IDbConnectionFactory dbConnectionFactory)
        {
            _dbConnectionFactory = dbConnectionFactory;
        }

        public async Task<Agent> GetByIdAsync(long id)
        {
            using(var sqlConnection = _dbConnectionFactory.MakeConnection())
            {
                try
                {
                    return await sqlConnection.GetAsync<Agent>(id);
                }
                catch(Exception e)
                {
                    throw new SqlQueryException("Failed to retrieve agent information", e);
                }
            }
        }

        public async Task AddAsync(Agent agent)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {
                if(await sqlConnection.InsertAsync(agent) <= 0)
                    throw new SqlTransactionException("Failed to store agent information in database");
            }
        }

        public async Task UpdateAsync(Agent agent)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {
                await sqlConnection.UpdateAsync(agent);
            }
        }

        public async Task RemoveAsync(Agent agent)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {
                await sqlConnection.DeleteAsync(agent);
            }
        }

        public async Task<IEnumerable<Agent>> GetAllAsync()
        {
            return await GetAllAsync(false);
        }
        public async Task<IEnumerable<Agent>> GetAllAsync(bool connected)
        {
            //var Connected = connected ? 1 : 0;
            string query = "SELECT * FROM Agent WHERE Connected = @connected;";
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

                return sqlConnection.QueryAsync<Agent>(query, connected);
            }
        }
        public async Task<IEnumerable<Agent>> GetByDepartmentAsync(UtsaDepartment utsaDepartment)
        {
            return await GetByDepartmentAsync(utsaDepartment, false);
        }
        public async Task<IEnumerable<Agent>> GetByDepartmentAsync(UtsaDepartment utsaDepartment, bool connected)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
    }
}
