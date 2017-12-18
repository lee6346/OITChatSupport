using System;
using OITChatSupport.Domain.Core;

namespace OITChatSupport.Domain.LiveAgentSupport
{
    public class LiveRequest: Entity
    {
        public string ConversationId { get; set; }
        public string BotHandle { get; set; }
        public DateTime RequestTime { get; set; }
        public string AgentId { get; set; }
        public DateTime? AcceptTime { get; set; }
    }
}
