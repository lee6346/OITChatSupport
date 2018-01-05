using MediatR;
using Newtonsoft.Json;

namespace OITChatBotSupport.Application.OITAgents.Commands
{
    public class AuthorizeAgent: IRequest<bool>
    { 
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
    }
}
