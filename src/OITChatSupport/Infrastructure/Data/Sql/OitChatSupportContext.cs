using Microsoft.EntityFrameworkCore;
using OITChatSupport.Domain.DirectLineChat;
using OITChatSupport.Domain.LiveAgentSupport;

namespace OITChatSupport.Infrastructure.Data.Sql
{
    public class OitChatSupportContext : DbContext
    {
        public OitChatSupportContext(DbContextOptions<OitChatSupportContext> options) : base(options)
        {}

        public DbSet<Agent> Agents { get; set; }
        public DbSet<DirectLineThread> DirectLineThreads { get; set; }
        public DbSet<LiveRequest> LiveRequests { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            OnAgentCreating(modelBuilder);
            OnDirectLineConnectionCreating(modelBuilder);
            OnLiveRequestCreating(modelBuilder);
        }

        public void OnAgentCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Agent>().ToTable("Agent");

            modelBuilder.Entity<Agent>().HasKey(agent => agent.Id)
                .ForSqlServerIsClustered();

            modelBuilder.Entity<Agent>().HasAlternateKey(agent => agent.UtsaId)
                .ForSqlServerIsClustered(false);

            modelBuilder.Entity<Agent>().Property(agent => agent.UtsaId)
                .HasMaxLength(30);

            modelBuilder.Entity<Agent>().Property(agent => agent.Connected)
                .HasDefaultValue(false)
                .IsRequired();

            modelBuilder.Entity<Agent>().Property(agent => agent.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();
                
        }


        public void OnDirectLineConnectionCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DirectLineThread>().ToTable("DirectLineThread");

            modelBuilder.Entity<DirectLineThread>().HasKey(thread => thread.Id)
                .ForSqlServerIsClustered();

            modelBuilder.Entity<DirectLineThread>().HasAlternateKey(thread => thread.ConversationId)
                .ForSqlServerIsClustered(false);

            modelBuilder.Entity<DirectLineThread>().Property(thread => thread.ConversationId)
                .HasMaxLength(30);

            modelBuilder.Entity<DirectLineThread>().Property(thread => thread.Timestamp)
                .HasColumnType("datetime2(7)")
                .IsRequired();

            modelBuilder.Entity<DirectLineThread>().Property(thread => thread.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();
        }

        public void OnLiveRequestCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<LiveRequest>().ToTable("LiveRequest");

            modelBuilder.Entity<LiveRequest>().HasKey(request => request.Id)
                .ForSqlServerIsClustered();

            modelBuilder.Entity<LiveRequest>().Property(request => request.ConversationId)
                .HasMaxLength(30)
                .IsRequired();

            modelBuilder.Entity<LiveRequest>().Property(request => request.BotHandle)
                .HasMaxLength(30)
                .IsRequired();

            modelBuilder.Entity<LiveRequest>().Property(request => request.RequestTime)
                .HasColumnType("datetime2(7)")
                .IsRequired();

            modelBuilder.Entity<LiveRequest>().Property(request => request.AgentId)
                .HasMaxLength(30)
                .IsRequired(false);

            modelBuilder.Entity<LiveRequest>().Property(request => request.AcceptTime)
                .HasColumnType("datetime2(7)")
                .IsRequired(false);

            modelBuilder.Entity<LiveRequest>().Property(request => request.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();
                
        }
    }
}
