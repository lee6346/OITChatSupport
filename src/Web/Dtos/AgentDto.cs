using Newtonsoft.Json;
using System;

namespace Web.Dtos
{
    public class AgentDto
    {
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
        [JsonProperty("utsaDepartment")]
        public string UtsaDepartment { get; set; }
        [JsonProperty("botHandle")]
        public string BotHandle { get; set; }
        [JsonProperty("connected")]
        public bool? Connected { get; set; }
        [JsonProperty("timeDisconnected")]
        public DateTime? TimeDisconnected { get; set; }
    }
}