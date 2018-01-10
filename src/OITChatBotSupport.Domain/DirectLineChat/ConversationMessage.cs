using OITChatBotSupport.Domain.Core.Abstractions;
using System;

namespace OITChatBotSupport.Domain.DirectLineChat
{
    /// <summary>
    /// DirectLine chat message
    /// </summary>
    public class ConversationMessage : Entity<int>
    {
        public ConversationMessage(
            int id, string conversationId, string text,
            string sender, DateTimeOffset timestamp)
        {
            Id = id;
            ConversationId = conversationId;
            Text = text;
            Sender = sender;
            Timestamp = timestamp;
        }

        /// <summary>
        /// ID uniquely identifying a direct line conversation. Use to reference participants, chat messages
        /// </summary>
        /// <value>22-character string</value>
        public string ConversationId { get; set; }

        /// <summary>
        /// The chat message text
        /// </summary>
        public string Text { get; set; }

        /// <summary>
        /// The sender of the message
        /// </summary>
        /// <value>student, bothandle, or agent's UTSA Id</value>
        public string Sender { get; set; }

        /// <summary>
        /// UTC time message was sent
        /// </summary>
        public DateTimeOffset Timestamp { get; set; }

        /// <summary>
        /// Equality of two <see cref="ConversationMessage"/> determined by its unique ID number
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        protected override bool IdEquals(int id)
        {
            return Id == id;
        }

        /// <summary>
        /// Hash code for testing <see cref="IdEquals(int)"/> used for collections
        /// </summary>
        /// <returns></returns>
        protected override int GetHashCodeCore()
        {
            return (Sender.GetHashCode() ^ Text.GetHashCode());
        }
    }
}
