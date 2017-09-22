using Domain.Model.Abstract;
using Domain.Model.Internal;
using System;

namespace Domain.Model
{

    public class AgentGroupConnection : ChatConnection
    {
        public UtsaDepartment UtsaDepartment { get; set; }
        public string AgentId { get; set; }
        public DateTime TimeConnected { get; set; }
        public DateTime? TimeDisconnected { get; set; }

    }
}