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

        public async Task<IEnumerable<Agent>> GetConnectedAgentsAsync()
        {
            
            string sqlQuery = "SELECT UtsaId AS Id, Connected FROM Agent WHERE Connected=@Connected";
            var results = await GetAsync(sqlQuery, new { Connected=true });
            return results;
        }
    }
}
