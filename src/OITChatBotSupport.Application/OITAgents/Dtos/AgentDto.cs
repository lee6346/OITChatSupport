using Newtonsoft.Json;

namespace OITChatBotSupport.Application.OITAgents.Dtos
{
    public class AgentDto
    {
        [JsonProperty("utsaId")]
        public string UtsaId { get; set; }
        [JsonProperty("connected")]
        public bool Connected { get; set; }
    }
}
