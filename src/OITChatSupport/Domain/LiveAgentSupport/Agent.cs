using OITChatSupport.Domain.Core;

namespace OITChatSupport.Domain.LiveAgentSupport
{
    public class Agent : Entity
    {
        public string UtsaId { get; set; }
        public bool Connected { get; set; }
    }
}