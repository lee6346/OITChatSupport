using Newtonsoft.Json;

namespace OITChatSupport.Web.Dtos
{
    public class LiveTransferDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("user")]
        public string User { get; set; }
        [JsonProperty("action")]
        public string Action { get; set; }
        [JsonProperty("timeStamp")]
        public string TimeStamp { get; set; }
        [JsonProperty("botHandle")]
        public string BotHandle { get; set; }
        [JsonProperty("department")]
        public string Department { get; set; }
    }
}