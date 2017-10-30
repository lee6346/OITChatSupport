using Dapper.FluentMap;
using Dapper.FluentMap.Dommel;

namespace PrintSpotBot.Data.Mappings
{
    public class MapInitializer
    {
        public static void Map()
        {
            FluentMapper.Initialize(config =>
            {
                config.AddMap(new ActivityMap());
                config.AddMap(new AgentMap());
                config.ForDommel();
            });
        }
    }
}