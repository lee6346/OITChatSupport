using Newtonsoft.Json;

namespace OITChatBotSupport.Web.Hubs
{
    public class HubMember
    {
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
    }
}
