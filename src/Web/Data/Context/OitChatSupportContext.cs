using Microsoft.EntityFrameworkCore;
using Web.Models;
namespace Web.Data.Context
{
    public class OitChatSupportContext : DbContext
    {
        public OitChatSupportContext(DbContextOptions<OitChatSupportContext> options) : base(options)
        {}

        public DbSet<Agent> Agents { get; set; }
        public DbSet<DirectLineThread> DirectLineThreads { get; set; }
        public DbSet<DirectLineMessage> DirectLineMessages { get; set; }
        public DbSet<LiveRequest> LiveRequests { get; set; }
        public DbSet<AgentGroupMessage> AgentGroupMessages { get; set; }
        public DbSet<EventLog> EventLogs { get; set; }
        public DbSet<ChatBot> ChatBots { get; set; }
        public DbSet<Department> Departments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            OnAgentCreating(modelBuilder);
            OnDirectLineConnectionCreating(modelBuilder);
            OnDirectLineMessageCreating(modelBuilder);
            OnLiveRequestCreating(modelBuilder);
            OnAgentGroupMessageCreating(modelBuilder);
            OnEventLogCreating(modelBuilder);
            OnDepartmentCreating(modelBuilder);
            OnChatBotCreating(modelBuilder);
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

            modelBuilder.Entity<Agent>().Property(agent => agent.UtsaDepartment)
                .HasMaxLength(30)
                .IsRequired();

            modelBuilder.Entity<Agent>().Property(agent => agent.Connected)
                .HasDefaultValue(false)
                .IsRequired();

            modelBuilder.Entity<Agent>().Property(agent => agent.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();
                
        }

        public void OnEventLogCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EventLog>().ToTable("EventLog");

            modelBuilder.Entity<EventLog>().HasKey(log => log.Id)
                .ForSqlServerIsClustered();

            modelBuilder.Entity<EventLog>().Property(log => log.EventType)
                .HasMaxLength(30)
                .IsRequired();

            modelBuilder.Entity<EventLog>().Property(log => log.Detail)
                .HasMaxLength(100)
                .IsRequired();

            modelBuilder.Entity<EventLog>().Property(log => log.Resolved)
                .HasDefaultValue(false)
                .IsRequired();

            modelBuilder.Entity<EventLog>().Property(log => log.Timestamp)
                .HasColumnType("datetime2(7)")
                .IsRequired();

            modelBuilder.Entity<EventLog>().Property(log => log.RowVersion)
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

            modelBuilder.Entity<DirectLineThread>().Property(thread => thread.BotHandle)
                .HasMaxLength(30)
                .IsRequired();

            modelBuilder.Entity<DirectLineThread>().Property(thread => thread.TimeCreated)
                .HasColumnType("datetime2(7)")
                .IsRequired();

            modelBuilder.Entity<DirectLineThread>().Property(thread => thread.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();
        }

        public void OnDirectLineMessageCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DirectLineMessage>().ToTable("DirectLineMessage");

            modelBuilder.Entity<DirectLineMessage>().HasKey(message => message.Id)
                .ForSqlServerIsClustered();

            modelBuilder.Entity<DirectLineMessage>().Property(message => message.ConversationId)
                .HasMaxLength(30)
                .IsRequired();

            modelBuilder.Entity<DirectLineMessage>().Property(message => message.Sender)
                .HasMaxLength(30)
                .IsRequired();

            modelBuilder.Entity<DirectLineMessage>().Property(message => message.Text)
                .HasMaxLength(200)
                .IsRequired();

            modelBuilder.Entity<DirectLineMessage>().Property(message => message.TimeSent)
                .HasColumnType("datetime2(7)")
                .IsRequired();

            modelBuilder.Entity<DirectLineMessage>().Property(message => message.RowVersion)
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
                .HasColumnType("datetime(7)")
                .IsRequired(false);

            modelBuilder.Entity<LiveRequest>().Property(request => request.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();
                
        }

        public void OnAgentGroupMessageCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AgentGroupMessage>().ToTable("AgentGroupMessage");

            modelBuilder.Entity<AgentGroupMessage>().HasKey(message => message.Id)
                .ForSqlServerIsClustered();

            modelBuilder.Entity<AgentGroupMessage>().Property(message => message.Sender)
                .HasMaxLength(30)
                .IsRequired();

            modelBuilder.Entity<AgentGroupMessage>().Property(message => message.UtsaDepartment)
                .HasMaxLength(30)
                .IsRequired();

            modelBuilder.Entity<AgentGroupMessage>().Property(message => message.Text)
                .HasMaxLength(200)
                .IsRequired();

            modelBuilder.Entity<AgentGroupMessage>().Property(message => message.TimeSent)
                .HasColumnType("datetime2(7)")
                .IsRequired();

            modelBuilder.Entity<AgentGroupMessage>().Property(message => message.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();
        }

        public void OnDepartmentCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Department>().ToTable("Department");

            modelBuilder.Entity<Department>().HasKey(department => department.Id)
                .ForSqlServerIsClustered();

            modelBuilder.Entity<Department>().HasAlternateKey(department => department.DepartmentId)
                .ForSqlServerIsClustered(false);

            modelBuilder.Entity<Department>().Property(department => department.DepartmentId)
                .HasMaxLength(30);

            modelBuilder.Entity<Department>().HasAlternateKey(department => department.BotHandle)
                .ForSqlServerIsClustered(false);

            modelBuilder.Entity<Department>().Property(department => department.BotHandle)
                .HasMaxLength(30);

            modelBuilder.Entity<Department>().Property(department => department.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();
        }

        public void OnChatBotCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ChatBot>().ToTable("ChatBot");

            modelBuilder.Entity<ChatBot>().HasKey(bot => bot.Id)
                .ForSqlServerIsClustered();

            modelBuilder.Entity<ChatBot>().HasAlternateKey(bot => bot.BotId)
                .ForSqlServerIsClustered(false);

            modelBuilder.Entity<ChatBot>().Property(bot => bot.BotId)
                .HasMaxLength(50);

            modelBuilder.Entity<ChatBot>().HasAlternateKey(bot => bot.BotHandle)
                .ForSqlServerIsClustered(false);

            modelBuilder.Entity<ChatBot>().Property(bot => bot.BotHandle)
                .HasMaxLength(30);

            modelBuilder.Entity<ChatBot>().Property(bot => bot.UtsaDepartment)
                .HasMaxLength(30)
                .IsRequired();

            modelBuilder.Entity<ChatBot>().Property(bot => bot.Connected)
                .HasDefaultValue(true)
                .IsRequired();

            modelBuilder.Entity<ChatBot>().Property(bot => bot.RowVersion)
                .ValueGeneratedOnAddOrUpdate()
                .IsConcurrencyToken();
        }
    }
}
