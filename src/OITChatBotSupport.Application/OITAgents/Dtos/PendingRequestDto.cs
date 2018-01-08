using Newtonsoft.Json;
using System;

namespace OITChatBotSupport.Application.OITAgents.Dtos
{
    public class PendingRequestDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("requested")]
        public DateTimeOffset Requested { get; set; }
        [JsonProperty("botHandle")]
        public string BotHandle { get; set; }
        [JsonProperty("lastMessage")]
        public string LastMessage { get; set; }
    }
}
