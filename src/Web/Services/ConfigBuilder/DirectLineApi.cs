namespace Web.Services.ConfigBuilder
{
    public class DirectLineApi
    {

        public string BaseUri { get; set; }
        public DirectLineEndPoints EndPoints { get; set; }
        public string Secret { get; set; }
    }

    public class DirectLineEndPoints
    {
        public string Token { get; set; }
        public string TokenRefresh { get; set; }
        public string Conversation { get; set; }
        public string Connection(string conversationId)
        {
            return Conversation + "/" + conversationId;
        }
        public string ActivitySet(string conversationId)
        {
            return Conversation + "/" + conversationId + "/activities";
        }
    }
}
