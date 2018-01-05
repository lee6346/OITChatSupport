using MediatR;

namespace OITChatBotSupport.Application.OITAgents.Events
{
    /// <summary>
    /// An event emitted by the AgentHub class that indicates an agent has disconnected from the web socket
    /// and can no longer receive any agent transfer requests
    /// </summary>
    public class AgentDisconnected : INotification
    {
        public AgentDisconnected(string agentId)
        {
            AgentId = agentId;
        }
        public string AgentId { get; set; }
    }
}
