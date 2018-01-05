using OITChatBotSupport.Domain.Core.Abstractions;
using System;

namespace OITChatBotSupport.Domain.DirectLineChat
{
    public class ConversationMessage : Entity<int>
    {
        public ConversationMessage(
            int id, string conversationId, string text,
            string sender, DateTime timestamp)
        {
            Id = id;
            ConversationId = conversationId;
            Text = text;
            Sender = sender;
            Timestamp = timestamp;
        }

        public string ConversationId { get; set; }
        public string Text { get; set; }
        public string Sender { get; set; }
        public DateTime Timestamp { get; set; }

        protected override bool IdEquals(int id)
        {
            return Id == id;
        }
        protected override int GetHashCodeCore()
        {
            return (Sender.GetHashCode() ^ Text.GetHashCode());
        }
    }
}
