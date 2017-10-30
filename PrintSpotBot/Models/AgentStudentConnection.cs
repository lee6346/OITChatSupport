using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PrintSpotBot.Models
{
    public class AgentStudentConnection
    {
        public int Id { get; set; }
        public string StudentConversationId { get; set; }
        public string AgentConversationId { get; set; }
        public string AgentId { get; set; }
        public DateTime Timestamp { get; set; }
    }
}