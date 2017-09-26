using Domain.Model.Common;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Extensions
{
    public class EntityTypeConfiguration: IEntityTypeConfiguration<Entity>
    {
        public void Configure(EntityTypeBuilder<Entity> entityTypeBuilder)
        {

        }
    }
}