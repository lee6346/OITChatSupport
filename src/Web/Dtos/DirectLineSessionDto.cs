using Newtonsoft.Json;
using System;

namespace Web.Dtos
{
    public class DirectLineSessionDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("botHandle")]
        public string BotHandle { get; set; }
        [JsonProperty("timeCreated")]
        public DateTime TimeCreated { get; set; }
    }
}
