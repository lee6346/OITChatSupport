using OITChatBotSupport.Domain.Core.Abstractions;
using System;

namespace OITChatBotSupport.Domain.DirectLineChat
{
    public class ConversationThread : Entity<string>
    {
        public DateTime Created { get; set; }

        public ConversationThread(string id, DateTime created)
        {
            Id = id;
            Created = created;
        }

        public ConversationThread(string id) : this(id, DateTime.UtcNow) { }

        protected override bool IdEquals(string id)
        {
            return Id == id;
        }

        protected override int GetHashCodeCore()
        {
            return Id.GetHashCode();
        }
    }
}
