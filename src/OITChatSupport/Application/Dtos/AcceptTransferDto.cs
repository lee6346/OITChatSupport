using Newtonsoft.Json;

namespace OITChatSupport.Application.Dtos
{
    public class AcceptTransferDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
    }
}
