using Newtonsoft.Json;
using System;

namespace Web.Dtos
{
    public class AgentDto
    {
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
        [JsonProperty("botHandle")]
        public string BotHandle { get; set; }
        [JsonProperty("connected")]
        public bool? Connected { get; set; }
        [JsonProperty("timeStamp")]
        public DateTime? TimeStamp { get; set; }
    }
}