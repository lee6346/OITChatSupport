using Newtonsoft.Json;
using System;

namespace OITChatSupport.Application.Dtos
{
    public class LiveTransferDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("user")]
        public string User { get; set; }
        [JsonProperty("botHandle")]
        public string BotHandle { get; set; }
        [JsonProperty("timeRequested")]
        public DateTime? TimeRequested { get; set; }
        [JsonProperty("lastMessage")]
        public string LastMessage { get; set; }
    }
}
