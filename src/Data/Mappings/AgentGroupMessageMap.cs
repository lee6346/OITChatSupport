using Dapper.FluentMap.Dommel.Mapping;
using Domain.Model;

namespace Data.Mappings
{
    public class AgentGroupMessageMap : DommelEntityMap<AgentGroupMessage>
    {
        public AgentGroupMessageMap()
        {
            ToTable("AgentGroupMessage");
            Map(d => d.Id).ToColumn("Id").IsKey();
            Map(d => d.RowVersion).Ignore();
        }
    }
}
