﻿using Dapper.FluentMap.Dommel.Mapping;
using Web.Models;

namespace Web.Data.Mappings
{
    public class AgentMap : DommelEntityMap<Agent>
    {
        public AgentMap()
        {
            ToTable("Agent");
            Map(d => d.Id).ToColumn("Id").IsKey();
            Map(d => d.RowVersion).Ignore();
        }
    }
}