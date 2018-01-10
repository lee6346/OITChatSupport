using System;
using System.Collections.Generic;
using System.Linq;

namespace OITChatBotSupport.Domain.DirectLineChat
{
    /// <summary>
    /// Direct line chat session aggregate
    /// Inherits the conversation thread and contains all messages for the thread
    /// </summary>
    public class ChatSession: ConversationThread
    {
        /// <summary>
        /// List of <see cref="ConversationMessage"/> from this <see cref="ConversationThread"/>
        /// </summary>
        private readonly IList<ConversationMessage> _messages;

        /// <summary>
        /// Returns the list of <see cref="ConversationMessage"/>
        /// </summary>
        /// <returns><see cref="IEnumerable{T}"/></returns>
        public IEnumerable<ConversationMessage> Messages => _messages;

        public ChatSession(string conversationId, DateTimeOffset created) :
            this(conversationId, created, new List<ConversationMessage>())
        { }

        public ChatSession(string conversationId, DateTimeOffset created, List<ConversationMessage> messages)
            :base(conversationId, created)
        {
            _messages = messages;
        }

        /// <summary>
        /// Add messages to the session
        /// </summary>
        /// <param name="messages">list of messages to combine with current list</param>
        public void AddMessages(IList<ConversationMessage> messages)
        {
            Messages.Concat(messages);
        }
    }
}
