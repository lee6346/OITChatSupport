using Web.Models.Common;

namespace Web.Models
{

    public class DirectLineMessage : ChatMessage
    {

        public string ConversationId { get; set; }

        public override string ToString()
        {
            return string.Format(
                "Message Id: {0}, Direct Line Thread: {1}, Sender: {2}, Text: {3}, Timestamp: {4}", 
                Id, ConversationId, Sender, Text, TimeSent);
        }
    }
}