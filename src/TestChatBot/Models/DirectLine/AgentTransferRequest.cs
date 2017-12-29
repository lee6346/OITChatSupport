using System;
using TestChatBot.Models.Abstractions;

namespace TestChatBot.Models.DirectLine
{
    public class AgentTransferRequest: Entity
    {
        public string ConversationId { get; set; }
        public string BotHandle { get; set; }
        public string Topic { get; set; } = "None";
        public DateTime Requested { get; set; }
    }
}