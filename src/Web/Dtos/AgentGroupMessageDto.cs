using Newtonsoft.Json;

namespace OITChatSupport.Web.Dtos
{
    /* Will remove either socket id or hub id */
    public class AgentGroupMessageDto
    {
        [JsonProperty("hubId")]
        public string HubId { get; set; }
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
        [JsonProperty("text")]
        public string Text { get; set; }
    }
}