using System;
using Web.Models.Common;

namespace Web.Models
{
    public class DirectLineConnection : ChatConnection
    {
        public string ConversationId { get; set; }
        public string User { get; set; }
        public DateTime TimeConnected { get; set; }
        public DateTime? TimeDisconnected { get; set; }
    }
}