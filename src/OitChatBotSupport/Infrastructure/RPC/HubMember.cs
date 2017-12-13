using Newtonsoft.Json;

namespace OITChatBotSupport.Infrastructure.RPC
{
    public class HubMember
    {
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
    }
}
