using Newtonsoft.Json;
using System;

namespace OITChatBotSupport.Infrastructure.Data.InMemory
{
    public class PendingRequest
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("requested")]
        public DateTime Requested { get; set; }
        [JsonProperty("botHandle")]
        public string BotHandle { get; set; }
        [JsonProperty("lastMessage")]
        public string LastMessage { get; set; }
    }
}
