using Newtonsoft.Json;

namespace Web.Dtos
{
    /// <summary>
    /// Inbound DTO to register a new agent in DB
    /// </summary>
    public class NewAgentDto
    {
        [JsonProperty("agentId")]
        public string AgentId { get; set; }
        [JsonProperty("departmentId")]
        public int DepartmentId { get; set; }
    }
}
