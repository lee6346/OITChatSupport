using Web.Models.Common;

namespace Web.Models
{
    public class ChatBot: Entity
    {
        public string BotId { get; set; }
        public string BotHandle { get; set; }
        public string UtsaDepartment { get; set; }
        public bool Connected { get; set; }

        public override string ToString()
        {
            return $"Bot: {BotHandle}\nDepartment: {UtsaDepartment}";
        }
    }
}
