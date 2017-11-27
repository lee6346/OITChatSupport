using System;

namespace TestChatBot.Models
{
    public class ConnectionEvent
    {
        public int Id { get; set; }
        public string ConversationId { get; set; }
        public string User { get; set; }
        public string EventType { get; set; }
        public DateTime Timestamp { get; set; }

    }
}