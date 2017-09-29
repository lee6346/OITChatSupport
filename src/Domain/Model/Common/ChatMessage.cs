using System;

namespace Web.Model.Common
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
        public byte[] RowVersion { get; set; }
        /*
        public override bool Equals(object obj)
        {
            return Equals(obj as ChatMessage);
        }
        /// <summary>
        /// Override equality to test using the Id property value
        /// </summary>
        /// <param name="chatMessage"></param>
        /// <returns></returns>
        public virtual bool Equals(ChatMessage chatMessage)
        {
            if (Object.ReferenceEquals(null, chatMessage)) return false;
            if (Object.ReferenceEquals(this, chatMessage)) return true;

            return String.Equals(Id, chatMessage.Id);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int hash = (int)2166136261;
                if (Id < 0)
                    return 0;
                return (hash * 16777619) ^ Id.GetHashCode();
            }
        }

        public static bool operator ==(ChatMessage message1, ChatMessage message2)
        {
            if (Object.ReferenceEquals(message1, message2)) return true;
            if (Object.ReferenceEquals(null, message2)) return false;
            return (message1.Equals(message2));

        }

        public static bool operator !=(ChatMessage message1, ChatMessage message2)
        {
            return !(message1 == message2);
        }
        */
    }
}