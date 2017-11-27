using Microsoft.Bot.Connector.DirectLine;
using Newtonsoft.Json;
using System;

namespace OITChatSupport.Dtos
{
    /// <summary>
    /// Inbound Dto for removing a Live Transfer Request (used for agents who accept or users who exit)
    /// </summary>
    public class LiveTransferDto
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("user")]
        public string User { get; set; }
        [JsonProperty("botHandle")]
        public string BotHandle { get; set; }
        [JsonProperty("timeRequested")]
        public DateTime? TimeRequested { get; set; }
        [JsonProperty("lastMessage")]
        public string LastMessage { get; set; }
    }
}
