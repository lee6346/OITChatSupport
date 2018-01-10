
namespace OITChatBotSupport.Infrastructure.Configuration
{
    /// <summary>
    /// Configuration object for the Direct Line API data
    /// Usage: IOptions<DirectLineOptions>
    /// </summary>
    public class DirectLineOptions
    {
        public DirectLineOptions()
        {
            Secret = "";
        }

        /// <summary>
        /// Direct Line API secret used to generate tokens for users
        /// </summary>
        public string Secret { get; set; }
    }
}
