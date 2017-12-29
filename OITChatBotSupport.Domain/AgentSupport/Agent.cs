using OITChatBotSupport.Domain.Core.Abstractions;

namespace OITChatBotSupport.Domain.AgentSupport
{
    public class Agent : Entity<string>
    {
        public Agent(string utsaId, bool connected)
        {
            Id = utsaId;
            Connected = connected;
        }

        public Agent() : this(null, false) { }

        public bool Connected { get; set; }

        protected override bool IdEquals(string id)
        {
            return id != null && Id == id;
        }

        protected override int GetHashCodeCore()
        {
            return Id.GetHashCode();
        }
    }
}
