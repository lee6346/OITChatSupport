using Newtonsoft.Json;
using System;

namespace Web.Dtos
{

    public class GroupMessageDto
    {
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
        [JsonProperty("text")]
        public string Text { get; set; }
        [JsonProperty("group")]
        public string Group { get; set; }
        [JsonProperty("timeStamp")]
        public DateTime? TimeStamp { get; set; }

    }
}