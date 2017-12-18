using OITChatSupport.Domain.Core;
using System.Collections.Generic;
using System.Linq;

namespace OITChatSupport.Domain.DirectLineChat
{
    public class ChatSession
    {
        private readonly IList<ConversationMessage> _messages;

        public ChatSession(ConversationThread conversationThread)
        {
            ConversationThread = conversationThread;
        }

        public ChatSession(ConversationThread conversationThread, IEnumerable<ConversationMessage> conversationMessages)
        {
            ConversationThread = conversationThread;
            ConversationMessages = conversationMessages.ToList();
        }

        public ConversationThread ConversationThread { get; set; }
        public List<ConversationMessage> ConversationMessages { get; set; }
    }
}