using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PrintSpotBot.Models
{
    public class ChatMessage
    {
        public int Id { get; set; }
        public string ConversationId { get; set; }
        public DateTime Timestamp { get; set; }
        public string Sender { get; set; }
        public string Text { get; set; }
    }
}