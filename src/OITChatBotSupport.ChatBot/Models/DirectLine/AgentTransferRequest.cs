using System;

namespace OITChatBotSupport.ChatBot.Models.DirectLine
{
    public class AgentTransferRequest
    {
        public int Id { get; set; }
        public string ConversationId { get; set; }
        public string BotHandle { get; set; }
        public string Topic { get; set; } = "None";
        public DateTime Requested { get; set; }
    }
}