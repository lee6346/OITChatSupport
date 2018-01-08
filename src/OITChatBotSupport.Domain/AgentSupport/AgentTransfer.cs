using System;

namespace OITChatBotSupport.Domain.AgentSupport
{
    public class AgentTransfer: TransferRequest
    {
        public string TransferStatus { get; set; }
        public string AssistingAgent { get; set; }

        public AgentTransfer():this(null, null, null, DateTimeOffset.UtcNow) { }

        public AgentTransfer(string conversationId, string botHandle,
            string lastMessage, DateTimeOffset requested)
            : this(conversationId, botHandle, lastMessage, requested, "Waiting", null) { }

        public AgentTransfer(string conversationId, string botHandle, 
            string lastMessage, DateTimeOffset requested, string transferStatus, string agent)
            :base(conversationId, botHandle, lastMessage, requested)
        {
            TransferStatus = transferStatus;
            AssistingAgent = agent;
        }

        

        public bool RequestAccepted()
        {
            return TransferStatus == "Accepted";
        }
    }
}
