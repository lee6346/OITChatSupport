using System;
using System.Collections.Generic;
using System.Linq;

namespace OITChatBotSupport.Domain.DirectLineChat
{
    public class ChatSession: ConversationThread
    {
        private readonly IList<ConversationMessage> _messages;

        public IEnumerable<ConversationMessage> Messages => _messages;

        public ChatSession(string conversationId, DateTimeOffset created) :
            this(conversationId, created, new List<ConversationMessage>())
        { }

        public ChatSession(string conversationId, DateTimeOffset created, List<ConversationMessage> messages)
            :base(conversationId, created)
        {
            _messages = messages;
        }

        public void AddMessages(IList<ConversationMessage> messages)
        {
            Messages.Concat(messages);
        }
    }
}
