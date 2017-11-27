using System;
using OITChatSupport.Domain.Core;

namespace OITChatSupport.Domain.DirectLineChat
{
    public class DirectLineThread : Entity
    {
        public string ConversationId { get; set; }
        public DateTime Timestamp { get; set; }
    }
}