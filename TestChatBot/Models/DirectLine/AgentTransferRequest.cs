using System;
using OITChatBot.Models.Abstractions;

namespace OITChatBot.Models.DirectLine
{
    public class AgentTransferRequest: Entity
    {
        public string ConversationId { get; set; }
        public string BotHandle { get; set; }
        public string Topic { get; set; } = "None";
        public DateTime Requested { get; set; }
    }
}