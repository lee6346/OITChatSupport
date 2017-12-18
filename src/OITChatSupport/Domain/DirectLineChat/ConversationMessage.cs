using OITChatSupport.Domain.Core;
using System;

namespace OITChatSupport.Domain.DirectLineChat
{
    public class ConversationMessage: ValueObject<ConversationMessage>
    {

        public ConversationMessage(string text, string sender, DateTime timestamp)
        {
            Text = text;
            Sender = sender;
            Timestamp = timestamp;
        }

        public ConversationMessage(string text, string sender)
            : this(text, sender, DateTime.UtcNow){}

        public string Text { get; private set; }
        public string Sender { get; private set; }
        public DateTime Timestamp {get; private set; }

        protected override bool EqualsCore(ConversationMessage other)
        {
            return Sender == other.Sender && Text == other.Text;
        }

        protected override int GetHashCodeCore()
        {
            return (Sender.GetHashCode() ^ Text.GetHashCode());
        }

        public override string ToString()
        {
            return $"Sender: {Sender}, Text: {Text}";
        }

    }
}