using System;
using Web.Models.Common;

namespace Web.Models
{
    public class DirectLineThread : ChatThread
    {
        public string ConversationId { get; set; }
        public DateTime TimeConnected { get; set; }
        public DateTime TimeDisconnected { get; set; }
    }
}