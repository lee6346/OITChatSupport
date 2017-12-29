using MediatR;
using Microsoft.Bot.Connector.DirectLine;
using Newtonsoft.Json;

namespace OITChatBotSupport.Application.OITAgents.Commands
{
    /// <summary>
    /// Command made by agent to accept a student's agent transfer request
    /// </summary>
    public class AcceptTransfer : IRequest<Conversation>
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
    }

}
