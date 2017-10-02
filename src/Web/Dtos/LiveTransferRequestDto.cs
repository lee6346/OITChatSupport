using Newtonsoft.Json;

namespace Web.Dtos
{
    /// <summary>
    /// Inbound Dto used to create a Live Transfer Request
    /// </summary>
    public class LiveTransferRequestDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("botHandle")]
        public string BotHandle { get; set; }
    }
}