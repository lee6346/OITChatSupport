using Web.Models.Common;

namespace Web.Models
{

    public class AgentGroupMessage : ChatMessage
    {
        public string UtsaDepartment { get; set; }

        public override string ToString()
        {
            return string.Format("Department: {0}, Sender: {1}, Time: {2}, Text: {3}",
                UtsaDepartment, Sender, TimeSent, Text);
        }
    }
}