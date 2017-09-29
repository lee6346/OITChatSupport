using Web.Model.Common;

namespace Web.Model
{

    public class AgentGroupMessage : ChatMessage
    {
        public UtsaDepartment UtsaDepartment { get; set; }
        public string Text { get; set; }
    }
}