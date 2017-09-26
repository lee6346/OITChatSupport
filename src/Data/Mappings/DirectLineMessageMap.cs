﻿using Dapper.FluentMap.Dommel.Mapping;
using Domain.Model;

namespace Data.Mappings
{
    public class DirectLineMessageMap : DommelEntityMap<DirectLineMessage>
    {
        public DirectLineMessageMap()
        {
            ToTable("DirectLineMessage");
            Map(d => d.Id).ToColumn("Id").IsKey();
            Map(d => d.RowVersion).Ignore();

        }

    }
}
