using Newtonsoft.Json;

namespace Web.Dtos
{
    public class AgentMessageDto
    {
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
        [JsonProperty("receiverId")]
        public string ReceiverId { get; set; }
        [JsonProperty("timeStamp")]
        public string TimeStamp { get; set; }
        [JsonProperty("text")]
        public string Text { get; set; }
    }
}
