using MediatR;
using Newtonsoft.Json;

namespace OITChatBotSupport.Application.OITAgents.Events
{
    /// <summary>
    /// An event emitted by the AgentHub class that indicates an agent has connected to the web socket
    /// and can receive agent transfer requests
    /// </summary>
    public class AgentConnected : INotification
    {
        public AgentConnected(string agentId)
        {
            AgentId = agentId;
        }
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
    }
}
