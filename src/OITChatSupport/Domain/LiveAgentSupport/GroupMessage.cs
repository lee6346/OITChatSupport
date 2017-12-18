using System;
using OITChatSupport.Domain.Core;

namespace OITChatSupport.Domain.LiveAgentSupport
{

    public class GroupMessage : Entity
    {
        public string From { get; set; }
        public DateTime Timestamp { get; set; }
        public string Text { get; set; }
    }
}