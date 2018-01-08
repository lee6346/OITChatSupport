using OITChatBotSupport.Domain.AgentSupport;
using OITChatBotSupport.Infrastructure.Data.Sql;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OITChatBotSupport.Infrastructure.Data.Repositories
{
    public class AgentRepository: SqlRepository<Agent>, IAgentRepository
    {
        public AgentRepository(ISqlConnectionFactory connectionFactory): base(connectionFactory)
        { }

        public async Task UpdateAgentConnectionAsync(string agentId, bool connected)
        {
            string sqlCommand = "UPDATE Agent SET Connected=@Connected WHERE UtsaId=@Id";
            var status = await ExecuteAsync(sqlCommand, new { Id = agentId, Connected = connected });
        }

        public async Task<IEnumerable<Agent>> GetAgentsAsync(bool connected)
        {
            string sqlQuery;

            if (connected)
            {
                sqlQuery = "SELECT UtsaId AS Id, Connected FROM Agent WHERE Connected=@Connected";
                return await GetAsync(sqlQuery, new { Connected = connected });
            }
            else
            {
                sqlQuery = "SELECT UtsaId AS Id, Connected FROM Agent";
                return await GetAsync(sqlQuery, null);
            }
        }
    }
}
