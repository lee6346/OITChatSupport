using Domain.Model.Internal;

namespace Domain.Model.Abstract
{
    public abstract class Chatbot
    {
        public string BotHandle { get; set; }
        public string AppId { get; set; }
        public UtsaDepartment UtsaDepartment { get; set; }
        public bool Connected { get; set; }
    }
}
