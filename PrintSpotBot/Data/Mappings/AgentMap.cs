using Dapper.FluentMap.Dommel.Mapping;
using PrintSpotBot.Models;

namespace PrintSpotBot.Data.Mappings
{
    public class AgentMap: DommelEntityMap<Agent>
    {
        public AgentMap()
        {
            ToTable("Agent");
            Map(agent => agent.Id).IsKey().IsIdentity();
            Map(agent => agent.UtsaId).ToColumn("UtsaId");
            Map(agent => agent.CurrentThreadId).ToColumn("ConversationId");
            Map(agent => agent.Connected).ToColumn("Connected");
            Map(agent => agent.RowVersion).Ignore();
        }
        
    }
}