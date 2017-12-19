using Microsoft.Bot.Connector;
using System;

namespace OITChatBot.Models.DirectLine
{
    public class MessageActivity: Entity
    {
        public string Sender { get; set; }
        public string ConversationId { get; set; }
        public string Text { get; set; }
        public DateTime Timestamp { get; set; }
    }

}