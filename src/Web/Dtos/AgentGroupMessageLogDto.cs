using Newtonsoft.Json;
using System.Collections.Generic;

namespace Web.Dtos
{
    /// <summary>
    /// Outbound Dto of MessageLog for agent group conversations
    /// </summary>
    public class AgentGroupMessageLogDto
    {
        [JsonProperty("agentGroupMessageLog")]
        public Dictionary<string, ChatMessageDto[]> AgentGroupMessageLog { get; set; }
    }
}
