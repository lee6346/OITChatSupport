using Newtonsoft.Json;

namespace Web.Dtos
{
    /// <summary>
    /// An Inbound Agent group message to store in the DB
    /// </summary>
    public class AgentGroupMessageDto
    {
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
        [JsonProperty("text")]
        public string Text { get; set; }
        [JsonProperty("groupName")]
        public string GroupName { get; set; }

    }
}