using Dapper.FluentMap.Dommel.Mapping;
using Web.Models;

namespace Web.Data.Mappings
{
    public class AdminMap : DommelEntityMap<Admin>
    {
        public AdminMap()
        {
            ToTable("Admin");
            Map(d => d.Id).ToColumn("Id").IsKey();
            Map(d => d.RowVersion).Ignore();
        }
    }
}
