using Newtonsoft.Json;

namespace OITChatSupport.Dtos
{
    public class CancelTransferDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
    }
}
