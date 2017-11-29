using Newtonsoft.Json;
using System;

namespace OITChatSupport.Application.Dtos
{
    public class AgentDto
    {
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
        [JsonProperty("connected")]
        public bool Connected { get; set; }
        [JsonProperty("timeDisconnected")]
        public DateTime? TimeDisconnected { get; set; }
    }
}