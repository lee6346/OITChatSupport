using Dapper.FluentMap;
using Dapper.FluentMap.Dommel;
namespace Data.Mappings
{
    public class MappingBootstrap
    {
        public static void Map()
        {
            FluentMapper.Initialize(config =>
            {
                config.AddMap(new EventLogMap());
                config.AddMap(new DirectLineMessageMap());
                config.AddMap(new DirectLineConnectionMap());
                config.AddMap(new AgentGroupMessageMap());
                config.AddMap(new AgentMap());
                config.AddMap(new AdminMap());
                config.ForDommel();
            });
        }
    }
}
