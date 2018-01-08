using Newtonsoft.Json;
using System;

namespace OITChatBotSupport.Application.OITAgents.Dtos
{
    public class GroupMessageDto
    {
        [JsonProperty("from")]
        public string From { get; set; }
        [JsonProperty("text")]
        public string Text { get; set; }
        [JsonProperty("timestamp")]
        public DateTimeOffset Timestamp { get; set; } = DateTimeOffset.UtcNow;
    }
}
