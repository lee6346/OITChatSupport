using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Dtos
{
    /// <summary>
    /// Outbound Dto of Live Agent message log
    /// </summary>
    public class DirectLineAgentLogDto
    {
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
        [JsonProperty("directLineMessages")]
        public Dictionary<string, ChatMessageDto[]> DirectLineMessages { get; set; }
    }

}
