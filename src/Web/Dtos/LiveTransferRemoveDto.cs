using Newtonsoft.Json;

namespace Web.Dtos
{
    /// <summary>
    /// Inbound Dto for removing a Live Transfer Request (used for agents who accept or users who exit)
    /// </summary>
    public class LiveTransferRemoveDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("user")]
        public string User { get; set; }
        [JsonProperty("botHandle")]
        public string BotHandle { get; set; }
    }
}
