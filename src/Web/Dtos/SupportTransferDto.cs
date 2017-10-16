using Newtonsoft.Json;

namespace Web.Dtos
{
    public class SupportTransferDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
        [JsonProperty("department")]
        public string Department { get; set; }

    }
}
