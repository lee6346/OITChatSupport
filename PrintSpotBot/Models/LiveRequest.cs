using PrintSpotBot.Models.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PrintSpotBot.Models
{
    public class LiveRequest
    {
        public int Id { get; set; }
        public string ConversationId { get; set; }
        public DateTime TimeStamp { get; set; }
        public TransferEventType TransferEventType { get; set; }
    }
}