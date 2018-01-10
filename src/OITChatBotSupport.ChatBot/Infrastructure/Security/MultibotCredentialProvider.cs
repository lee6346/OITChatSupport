using Microsoft.Bot.Connector;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OITChatBotSupport.ChatBot.Infrastructure.Security
{
    public class MultibotCredentialProvider: ICredentialProvider
    {
        public Dictionary<string, string> Credentials = new Dictionary<string, string>
        {
            { "app-id of first registered bot on site", "app-passsword of first registered bot on site"},
            { "same for second registered bot" , "same for second registered bot" }
        };

        public Task<bool> IsValidAppIdAsync(string appId)
        {
            return Task.FromResult(this.Credentials.ContainsKey(appId));
        }

        public Task<string> GetAppPasswordAsync(string appId)
        {
            return Task.FromResult(this.Credentials.ContainsKey(appId) ? this.Credentials[appId] : null);
        }

        public Task<bool> IsAuthenticationDisabledAsync()
        {
            return Task.FromResult(!this.Credentials.Any());
        }
    }
}