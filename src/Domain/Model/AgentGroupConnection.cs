using Web.Model.Common;
using System;

namespace Web.Model
{

    public class AgentGroupConnection : ChatConnection
    {
        public string UtsaId { get; set; }
        public UtsaDepartment UtsaDepartment { get; set; }
        public DateTime TimeConnected { get; set; }
        public DateTime? TimeDisconnected { get; set; }

    }
}