using Newtonsoft.Json;
using System;

namespace OITChatSupport.Dtos
{
    public class DirectLineSessionDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("timeCreated")]
        public DateTime TimeCreated { get; set; }
    }
}
