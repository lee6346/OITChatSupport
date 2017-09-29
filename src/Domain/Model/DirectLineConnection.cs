using Web.Model.Common;
using System;

namespace Web.Model
{
    public class DirectLineConnection : ChatConnection
    {
        public string ConversationId { get; set; }
        public string User { get; set; }
        public DateTime TimeConnected { get; set; }
        public DateTime? TimeDisconnected { get; set; }
    }
}