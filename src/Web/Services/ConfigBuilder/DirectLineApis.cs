namespace OITChatSupport.Web.ConfigBuilder
{
    public class DirectLineApi
    {

        public DirectLineApi()
        {
            BaseUri = "https://directline.botframework.com";
            ConversationApi = "v3/directline/tokens/generate";
            ConnectionApi = "v3/directline/conversations/";
            ActivitiesApi = "";
        }


        public string BaseUri { get; set; }
        public string ConversationApi { get; set; }
        public string ConnectionApi { get; set; }
        public string ActivitiesApi { get; set; }
    }


}