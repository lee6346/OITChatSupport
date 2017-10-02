using Newtonsoft.Json;

namespace Web.Dtos
{

    /// <summary>
    /// Inbound DTO for 1. Creating new thread in DB, 2. Exiting thread
    /// </summary>
    public class DirectLineThreadDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
    }
}
