
using System;
using TestChatBot.Models.Abstractions;

namespace TestChatBot.Models.DirectLine
{
    public class MessageActivity: Entity
    {
        public string Sender { get; set; }
        public string ConversationId { get; set; }
        public string Text { get; set; }
        public DateTime Timestamp { get; set; }
    }

}