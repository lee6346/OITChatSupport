using Newtonsoft.Json;

namespace Web.Dtos
{
    public class DirectLineConnectionDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("user")]
        public string User { get; set; }
    }
}
