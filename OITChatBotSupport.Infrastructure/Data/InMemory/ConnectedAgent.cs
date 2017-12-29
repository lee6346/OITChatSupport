using System;

namespace OITChatBotSupport.Infrastructure.Data.InMemory
{
    public class ConnectedAgent
    {
        public ConnectedAgent(string agentId) 
        {
            AgentId = agentId;
            CurrentSessions = 0;
            TimeConnected = DateTime.UtcNow;
        }
        public string AgentId { get; set; }
        public int CurrentSessions { get; set; }
        public DateTime TimeConnected { get; set; }
    }

}
