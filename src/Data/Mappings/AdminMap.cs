using Dapper.FluentMap.Dommel.Mapping;
using Domain.Model;

namespace Data.Mappings
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
