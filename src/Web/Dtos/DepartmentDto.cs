using Newtonsoft.Json;

namespace Web.Dtos
{
    public class DepartmentDto
    {
        [JsonProperty("departmentId")]
        public string DepartmentId { get; set; }
        [JsonProperty("botHandle")]
        public string BotHandle { get; set; }
    }
}
