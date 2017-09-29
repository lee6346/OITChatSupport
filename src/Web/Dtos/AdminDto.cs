
using Newtonsoft.Json;

namespace Web.Dtos
{
    public class AdminDto
    {
        [JsonProperty("id")]
        public string AdminId { get; set; }
    }
}