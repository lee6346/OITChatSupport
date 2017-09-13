using Newtonsoft.Json;

namespace OITChatSupport.Web.Dtos
{
    public class DirectLineTokenDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("expires_in")]
        public int Expiration { get; set; }
        [JsonProperty("streamUrl")]
        public string StreamUrl { get; set; }
        [JsonProperty("token")]
        public string Token { get; set; }
    }
}