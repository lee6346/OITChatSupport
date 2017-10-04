using Microsoft.EntityFrameworkCore;
using Web.Models;

namespace Web.Data.Context
{
    public class OitChatSupportContext : DbContext
    {
        public OitChatSupportContext(DbContextOptions<OitChatSupportContext> options) : base(options)
        {}

        public DbSet<Agent> Agents { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<DirectLineThread> DirectLineConnections { get; set; }
        public DbSet<DirectLineMessage> DirectLineMessages { get; set; }
        public DbSet<AgentGroupMessage> AgentGroupMessages { get; set; }
        public DbSet<EventLog> EventLogs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            OnAgentCreating(modelBuilder);
            OnAdminCreating(modelBuilder);
            OnDirectLineConnectionCreating(modelBuilder);
            OnDirectLineMessageCreating(modelBuilder);
            OnAgentGroupMessageCreating(modelBuilder);
            OnEventLogCreating(modelBuilder);
        }

        public void OnAgentCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Agent>().ToTable("Agent");

            modelBuilder.Entity<Agent>().HasKey(b => b.UtsaId)
                .HasName("Id")
                .ForSqlServerIsClustered();

            modelBuilder.Entity<Agent>().HasAlternateKey(b => b.UtsaId)
                .ForSqlServerIsClustered(false);

            modelBuilder.Entity<Agent>().Property(b => b.UtsaDepartment)
                .HasMaxLength(20)
                .IsRequired();

            modelBuilder.Entity<Agent>().Property(b => b.Connected)
                .HasColumnType("bit")
                .IsRequired();

            modelBuilder.Entity<Agent>().Property(b => b.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();
                
        }

        public void OnAdminCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Admin>().ToTable("Admin");

            modelBuilder.Entity<Admin>().HasKey(b => b.UtsaId)
                .HasName("Id")
                .ForSqlServerIsClustered();

            modelBuilder.Entity<Admin>().HasAlternateKey(b => b.UtsaId)
                .ForSqlServerIsClustered(false);

            modelBuilder.Entity<Admin>().Property(b => b.Connected)
                .HasColumnType("bit")
                .IsRequired();

            modelBuilder.Entity<Admin>().Property(b => b.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();

        }
        public void OnEventLogCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EventLog>().ToTable("Event_Log");

            modelBuilder.Entity<EventLog>().HasKey(b => b.Id)
                .HasName("Id")
                .ForSqlServerIsClustered();

            modelBuilder.Entity<EventLog>().Property(b => b.EventType)
                .HasMaxLength(30)
                .IsRequired();

            modelBuilder.Entity<EventLog>().Property(b => b.Level)
                .HasMaxLength(30)
                .IsRequired();

            modelBuilder.Entity<EventLog>().Property(b => b.Message)
                .HasMaxLength(100)
                .IsRequired();

            modelBuilder.Entity<EventLog>().Property(b => b.Resolved)
                .HasColumnType("bit")
                .HasDefaultValue(false)
                .IsRequired();

            modelBuilder.Entity<EventLog>().Property(b => b.Timestamp)
                .HasColumnType("datetime2")
                .IsRequired();

            modelBuilder.Entity<EventLog>().Property(b => b.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();

        }
        public void OnDirectLineConnectionCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DirectLineThread>().ToTable("Direct_Line_Connection");

            modelBuilder.Entity<DirectLineThread>().HasKey(b => b.Id)
                .HasName("Id")
                .ForSqlServerIsClustered();

            modelBuilder.Entity<DirectLineThread>().HasAlternateKey(b => b.ConversationId)
                .ForSqlServerIsClustered(false);


            modelBuilder.Entity<DirectLineThread>().Property(b => b.TimeConnected)
                .HasColumnType("datetime2")
                .IsRequired();

            modelBuilder.Entity<DirectLineThread>().Property(b => b.TimeDisconnected)
                .HasColumnType("datetime2");

            modelBuilder.Entity<DirectLineThread>().Property(b => b.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();

        }

        public void OnDirectLineMessageCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DirectLineMessage>().ToTable("Direct_Line_Message");

            modelBuilder.Entity<DirectLineMessage>().HasKey(b => b.Id)
                .HasName("Id")
                .ForSqlServerIsClustered();

            modelBuilder.Entity<DirectLineMessage>().Property(b => b.ConversationId)
                .IsRequired();

            modelBuilder.Entity<DirectLineMessage>().Property(b => b.Sender)
                .HasMaxLength(20)
                .IsRequired();

            modelBuilder.Entity<DirectLineMessage>().Property(b => b.Text)
                .HasMaxLength(300)
                .IsRequired();

            modelBuilder.Entity<DirectLineMessage>().Property(b => b.TimeSent)
                .HasColumnType("datetime2")
                .IsRequired();

            modelBuilder.Entity<DirectLineMessage>().Property(b => b.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();

        }

        public void OnAgentGroupMessageCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AgentGroupMessage>().ToTable("Agent_Group_Message");

            modelBuilder.Entity<AgentGroupMessage>().HasKey(b => b.Id)
                .HasName("Id")
                .ForSqlServerIsClustered();


            modelBuilder.Entity<AgentGroupMessage>().Property(b => b.Sender)
                .HasMaxLength(20)
                .IsRequired();

            modelBuilder.Entity<AgentGroupMessage>().Property(b => b.Text)
                .HasMaxLength(300)
                .IsRequired();

            modelBuilder.Entity<AgentGroupMessage>().Property(b => b.TimeSent)
                .HasColumnType("datetime2")
                .IsRequired();

            modelBuilder.Entity<AgentGroupMessage>().Property(b => b.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();

        }

    }
}
