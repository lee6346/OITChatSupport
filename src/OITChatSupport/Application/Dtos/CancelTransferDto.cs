using Newtonsoft.Json;

namespace OITChatSupport.Application.Dtos
{
    public class CancelTransferDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
    }
}
