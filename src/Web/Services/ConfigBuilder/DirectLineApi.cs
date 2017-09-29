namespace Web.Services.ConfigBuilder
{
    public class DirectLineApi
    {
        public DirectLineApi()
        {
            TokenUri = "";
            TokenRefreshUri = "";
            ConversationUri = "";
            SecretPrefix = "";
            Secret = "";
        }
        public string TokenUri { get; set; }
        public string TokenRefreshUri { get; set; }
        public string ConversationUri { get; set; }
        public string SecretPrefix { get; set; }
        public string Secret { get; set; }

    }

}
