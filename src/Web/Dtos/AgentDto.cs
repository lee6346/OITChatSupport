using Newtonsoft.Json;

namespace OITChatSupport.Web.Dtos
{
    public class AgentDto
    {
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
        [JsonProperty("department")]
        public int? Department { get; set; }
        [JsonProperty("connected")]
        public bool? Connected { get; set; }
    }
}