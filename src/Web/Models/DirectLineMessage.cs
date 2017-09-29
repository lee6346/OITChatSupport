using Web.Models.Common;

namespace Web.Models
{

    public class DirectLineMessage : ChatMessage
    {

        public string ConversationId { get; set; }
        public MessageType MessageType { get; set; }
        public string Text { get; set; }
    }
}