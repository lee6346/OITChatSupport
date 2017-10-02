
using Newtonsoft.Json;

namespace Web.Dtos
{
    /// <summary>
    /// An Outbound DTO for serving chat messages in message logs
    /// </summary>
    public class ChatMessageDto
    {
        [JsonProperty("sender")]
        public string Sender { get; set; }
        [JsonProperty("timeStamp")]
        public string TimeStamp { get; set; }
        [JsonProperty("text")]
        public string Text { get; set; }
    }
}