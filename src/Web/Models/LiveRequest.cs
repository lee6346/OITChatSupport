using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models.Common;

namespace Web.Models
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
