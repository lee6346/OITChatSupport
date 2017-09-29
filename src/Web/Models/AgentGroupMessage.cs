using Web.Models.Common;

namespace Web.Models
{

    public class AgentGroupMessage : ChatMessage
    {
        public UtsaDepartment UtsaDepartment { get; set; }
        public string Text { get; set; }
    }
}