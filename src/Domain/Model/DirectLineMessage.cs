using Domain.Model.Abstract;
using Domain.Model.Internal;

namespace Domain.Model
{

    public class DirectLineMessage : ChatMessage
    {

        public string ConversationId { get; set; }
        public MessageType MessageType { get; set; }
        public string Text { get; set; }
    }
}