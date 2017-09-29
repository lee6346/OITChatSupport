using Newtonsoft.Json;

namespace Web.Dtos
{
    public class AgentDto
    {
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
        [JsonProperty("department")]
        public int? Department { get; set; }
        [JsonProperty("connected")]
        public bool? Connected { get; set; }
        [JsonProperty("connectionId")]
        public string ConnectionId { get; set; }
    }
}