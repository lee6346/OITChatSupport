using Newtonsoft.Json;
namespace OITChatSupport.Application.Dtos
{
    public class AccountDto
    {
        [JsonProperty("utsaId")]
        public string UtsaId { get; set; }
    }
}
