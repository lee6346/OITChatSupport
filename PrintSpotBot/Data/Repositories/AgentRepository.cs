using Dapper;
using PrintSpotBot.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PrintSpotBot.Data.Repositories
{
    public class AgentRepository: IAgentRepository
    {
        private readonly ISqlConnectionFactory _sqlConnectionFactory;
        public AgentRepository(ISqlConnectionFactory sqlConnectionFactory)
        {
            _sqlConnectionFactory = sqlConnectionFactory;
        }

        public async Task<List<Agent>> GetConnected()
        {
            string queryAgents = "SELECT * FROM Agents WHERE Connected = @Connected";

            using (var connection = _sqlConnectionFactory.MakeConnection())
            {
                var agents = await connection.QueryAsync<Agent>(queryAgents, new { Connected = 1});
                return agents.ToList();
            }
        }
    }
}