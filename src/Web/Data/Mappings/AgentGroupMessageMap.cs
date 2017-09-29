using Dapper.FluentMap.Dommel.Mapping;
using Web.Models;

namespace Web.Data.Mappings
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
