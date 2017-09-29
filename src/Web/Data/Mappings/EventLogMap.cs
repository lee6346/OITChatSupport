using Dapper.FluentMap.Dommel.Mapping;
using Web.Models;

namespace Web.Data.Mappings
{
    public class EventLogMap: DommelEntityMap<EventLog>
    {
        public EventLogMap()
        {
            ToTable("EventLog");
            Map(d => d.Id).ToColumn("Id").IsKey();
            Map(d => d.RowVersion).Ignore();

        }
    }
}
