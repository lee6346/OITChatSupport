using Newtonsoft.Json;

namespace Web.Dtos
{
    public class DirectLineSocketStreamDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("token")]
        public string Token { get; set; }
        [JsonProperty("streamUrl")]
        public string StreamUrl { get; set; }
    }
}