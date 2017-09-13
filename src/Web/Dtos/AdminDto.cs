
using Newtonsoft.Json;

namespace OITChatSupport.Web.Dtos
{
    public class AdminDto
    {
        [JsonProperty("id")]
        public string AdminId { get; set; }
    }
}