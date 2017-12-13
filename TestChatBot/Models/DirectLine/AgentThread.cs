using OITChatBot.Models.Abstractions;

namespace OITChatBot.Models.DirectLine
{
    public class AgentThread: Entity
    {
        public string AgentId { get; set; }
        public string ConversationId { get; set; }
    }
}