using System;

namespace Web.Models.Common
{
    /// <summary>
    /// ChatMessage: To be inherited as chat messages of different formatting depending on source of JSON message object
    /// </summary>
    public abstract class ChatMessage: Entity
    {

        /// <summary>
        /// Sender: Can be Utsa Id, Chat bot's bot handler name, or generic 'student' or 'user' values
        /// </summary>
        public string Sender { get; set; }
        public DateTime TimeSent { get; set; }
        public string Text { get; set; }
        public byte[] RowVersion { get; set; }
    }
}