using Newtonsoft.Json;

namespace Web.Dtos
{
    public class ChatBotDto
    {
        [JsonProperty("botHandle")]
        public string BotHandle { get; set; }
        [JsonProperty("utsaDepartment")]
        public string UtsaDepartment { get; set; }
        [JsonProperty("connected")]
        public bool Connected { get; set; }
    }
}
