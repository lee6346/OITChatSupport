using Domain.Model.Common;

namespace Domain.Model
{

    public class AgentGroupMessage : ChatMessage
    {
        public UtsaDepartment UtsaDepartment { get; set; }
        public string Text { get; set; }
    }
}