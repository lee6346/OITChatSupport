using Newtonsoft.Json;
using System;

namespace OITChatSupport.Dtos
{

    public class GroupMessageDto
    {
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
        [JsonProperty("text")]
        public string Text { get; set; }
        [JsonProperty("timeStamp")]
        public DateTime? TimeStamp { get; set; }

    }
}