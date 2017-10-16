using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Web.Models;

namespace Web.Data.Mappings
{
    public class EventLogMap: IEntityTypeConfiguration<EventLog>
    {
        public void Configure(EntityTypeBuilder<EventLog> modelBuilder)
        {
            modelBuilder.ToTable("EventLog");

            modelBuilder.HasKey(log => log.Id)
                .ForSqlServerIsClustered();

            modelBuilder.Property(log => log.EventType)
                .HasMaxLength(30)
                .IsRequired();

            modelBuilder.Property(log => log.Detail)
                .HasMaxLength(100)
                .IsRequired();

            modelBuilder.Property(log => log.Resolved)
                .HasDefaultValue(false)
                .IsRequired();

            modelBuilder.Property(log => log.Timestamp)
                .HasColumnType("datetime2(7)")
                .IsRequired();

            modelBuilder.Property(log => log.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();
        }
    }
}
