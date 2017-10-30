using PrintSpotBot.Models.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PrintSpotBot.Models
{
    public class ConnectionEvent
    {
        public int Id { get; set; }
        public string ConversationId { get; set; }
        public string User { get; set; }
        public ConnectionEventType ConnectionEventType { get; set; }

    }
}