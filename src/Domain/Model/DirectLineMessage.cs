using Domain.Model.Common;

namespace Domain.Model
{

    public class DirectLineMessage : ChatMessage
    {

        public string ConversationId { get; set; }
        public MessageType MessageType { get; set; }
        public string Text { get; set; }
    }
}