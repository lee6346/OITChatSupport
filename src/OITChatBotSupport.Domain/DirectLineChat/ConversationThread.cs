using OITChatBotSupport.Domain.Core.Abstractions;
using System;

namespace OITChatBotSupport.Domain.DirectLineChat
{
    /// <summary>
    /// The Direct Line conversation thread for users to chat
    /// </summary>
    public class ConversationThread : Entity<string>
    {
        /// <summary>
        /// Date and time the thread was created
        /// </summary>
        public DateTimeOffset Created { get; set; }

        public ConversationThread(string id, DateTimeOffset created)
        {
            Id = id;
            Created = created;
        }

        public ConversationThread(string id) : this(id, DateTimeOffset.UtcNow) { }

        /// <summary>
        /// Equality of two <see cref="ConversationThread"/> determined by its unique ID number
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        protected override bool IdEquals(string id)
        {
            return Id == id;
        }

        /// <summary>
        /// Hash code for testing <see cref="IdEquals(int)"/> used for collections
        /// </summary>
        /// <returns></returns>
        protected override int GetHashCodeCore()
        {
            return Id.GetHashCode();
        }
    }
}
