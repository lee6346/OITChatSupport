
using Newtonsoft.Json;

namespace OITChatSupport.Web.Dtos
{
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