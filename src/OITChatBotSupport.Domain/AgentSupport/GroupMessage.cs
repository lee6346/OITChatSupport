using OITChatBotSupport.Domain.Core.Abstractions;
using System;

namespace OITChatBotSupport.Domain.AgentSupport
{
    public class GroupMessage : ValueObject<GroupMessage>
    {
        public GroupMessage(string from, string text, DateTimeOffset timestamp)
        {
            From = from;
            Text = text;
            Timestamp = timestamp;
        }

        public GroupMessage(string from, string text) : this(from, text, DateTimeOffset.UtcNow) { }

        public string From { get; private set; }
        public DateTimeOffset Timestamp { get; private set; }
        public string Text { get; private set; }

        protected override int GetHashCodeCore()
        {
            return From.GetHashCode()
                ^ Text.GetHashCode()
                ^ Timestamp.GetHashCode();
        }

        protected override bool EqualsCore(GroupMessage other)
        {
            return From == other.From
                && Text == other.Text
                && Timestamp == other.Timestamp;
        }
    }
}
