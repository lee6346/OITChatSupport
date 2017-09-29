using Newtonsoft.Json;

namespace Web.Dtos
{
    public class AgentGroupMessageDto
    {
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
        [JsonProperty("text")]
        public string Text { get; set; }
        [JsonProperty("department")]
        public string Department { get; set; } 
    }
}