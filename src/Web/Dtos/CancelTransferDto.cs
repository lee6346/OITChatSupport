using Newtonsoft.Json;

namespace Web.Dtos
{
    public class CancelTransferDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
    }
}
