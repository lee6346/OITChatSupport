using Dapper.FluentMap.Dommel.Mapping;
using Web.Models;

namespace Web.Data.Mappings
{
    public class DirectLineConnectionMap : DommelEntityMap<DirectLineConnection>
    {
        public DirectLineConnectionMap()
        {
            ToTable("DirectLineConnection");
            Map(d => d.Id).ToColumn("Id").IsKey();
            Map(d => d.RowVersion).Ignore();
        }
    }
}
