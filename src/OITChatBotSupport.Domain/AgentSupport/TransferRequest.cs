using OITChatBotSupport.Domain.Core.Abstractions;
using System;

namespace OITChatBotSupport.Domain.AgentSupport
{
    public class TransferRequest : Entity<string>
    {
        public string BotHandle { get; set; }
        public string LastMessage { get; set; }
        public DateTimeOffset Requested { get; set; }

        public TransferRequest(
            string conversationId, string botHandle,
            string lastMessage, DateTimeOffset timeRequested)
        {
            Id = conversationId;
            BotHandle = botHandle;
            LastMessage = lastMessage;
            Requested = timeRequested;
        }

        protected override int GetHashCodeCore()
        {
            return Id.GetHashCode();
        }

        protected override bool IdEquals(string id)
        {
            return Id == id;
        }
    }
}
