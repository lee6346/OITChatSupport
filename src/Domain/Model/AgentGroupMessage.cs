using Domain.Model.Abstract;
using Domain.Model.Internal;

namespace Domain.Model
{

    public class AgentGroupMessage : ChatMessage
    {
        public UtsaDepartment UtsaDepartment { get; set; }
        public string Text { get; set; }
    }
}