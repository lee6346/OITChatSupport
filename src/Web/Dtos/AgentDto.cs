using Newtonsoft.Json;

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
    }
}