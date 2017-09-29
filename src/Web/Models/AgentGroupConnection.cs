using Web.Models.Common;
using System;

namespace Web.Models
{

    public class AgentGroupConnection : ChatConnection
    {
        public string UtsaId { get; set; }
        public string UtsaDepartment { get; set; }
        public DateTime TimeConnected { get; set; }
        public DateTime? TimeDisconnected { get; set; }

    }
}