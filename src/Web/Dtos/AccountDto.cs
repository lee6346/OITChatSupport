using Newtonsoft.Json;
namespace Web.Dtos
{
    /// <summary>
    /// Generic DTO both inbound and outbound for:
    ///     1. authorizing account holders
    ///     2. returning a list of account holders
    ///     3. connecting to socket groups
    /// </summary>
    public class AccountDto
    {
        [JsonProperty("utsaId")]
        public string UtsaId { get; set; }
    }
}
