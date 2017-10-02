using Newtonsoft.Json;
using System.Collections.Generic;

namespace Web.Dtos
{
    /// <summary>
    /// Outbound Dto of Bot Handle message log
    /// </summary>
    public class DirectLineBotHandleLog
    {
        [JsonProperty("botHandle")]
        public string ConversationId { get; set; }
        [JsonProperty("directLineMessages")]
        public Dictionary<string, ChatMessageDto[]> DirectLineMessages { get; set; }
    }
}
