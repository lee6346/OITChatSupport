using Domain.Model.Common;
using System;

namespace Domain.Model
{
    public class DirectLineConnection : ChatConnection
    {
        public string ConversationId { get; set; }
        public string User { get; set; }
        public DateTime TimeConnected { get; set; }
        public DateTime? TimeDisconnected { get; set; }
    }
}