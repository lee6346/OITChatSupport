using System;
using OITChatSupport.Domain.Core;

namespace OITChatSupport.Domain.DirectLineChat
{
    public class ConversationThread : Entity<string>
    {
        public ConversationThread(string conversationId, DateTime created)
        {
            ConversationId = conversationId;
            Created = created;
        }
        public ConversationThread(string conversationId): this(conversationId, DateTime.UtcNow){}

        public string ConversationId { get; set; }
        public DateTime Created { get; private set; }

        public override bool IdEquals(string id)
        {
            return (id != null && ConversationId == id);
        }

        public override int GetHashCode()
        {
            return ConversationId.GetHashCode();
        }

        public override string ToString()
        {
            return $"ConversationId: {ConversationId}, Created: {Created}";
        }
    }
}