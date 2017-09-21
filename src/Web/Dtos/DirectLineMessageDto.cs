using Newtonsoft.Json;

namespace OITChatSupport.Web.Dtos
{
    public class DirectLineMessageDto
    {

        [JsonProperty("conversation")]
        public Conversation Conversation { get; set; }
        [JsonProperty("from")]
        public Sender Sender { get; set; }
        [JsonProperty("text")]
        public string Text { get; set; }

    }
    public class Sender
    {
        [JsonProperty("id")]
        public string Id { get; set; }
    }

    public class Conversation
    {
        [JsonProperty("id")]
        public string Id { get; set; }
    }



}