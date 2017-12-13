using System;

namespace OITChatBotSupport.Infrastructure.Data.InMemory
{
    public class PendingRequest
    {
        public string ConversationId { get; set; }
        public DateTime Requested { get; set; }
        public string BotHandle { get; set; }
        public string LastMessage { get; set; }
    }
}
