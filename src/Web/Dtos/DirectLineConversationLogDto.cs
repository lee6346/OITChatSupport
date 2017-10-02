using Newtonsoft.Json;

namespace Web.Dtos
{
    /// <summary>
    /// An outbound DTO of a conversation message log
    /// </summary>
    public class DirectLineConversationLogDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("directLineConversationMessages")]
        public ChatMessageDto[] DirectLineConversationMessages { get; set; }
    }
}
