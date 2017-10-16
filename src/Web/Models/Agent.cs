using Web.Models.Common;

namespace Web.Models
{
    public class Agent : Entity
    {
        public string UtsaId { get; set; }
        public string BotHandle { get; set; }
        public bool Connected { get; set; }

        public override string ToString()
        {
            return string.Format("Agent: {0}, Department: {1}, Connection status: {2}",
                UtsaId, BotHandle, Connected);
        }
    }
}