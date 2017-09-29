namespace Web.Models.Common
{
    public abstract class ChatConnection: Entity
    {
        public byte[] RowVersion { get; set; }

        /*
        public override bool Equals(object obj)
        {
            return Equals(obj as ChatConnection);
        }

        public virtual bool Equals(ChatConnection chatConnection)
        {
            if (Object.ReferenceEquals(null, chatConnection)) return false;
            if (Object.ReferenceEquals(this, chatConnection)) return true;

            return String.Equals(Id, chatConnection.Id);
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

        public static bool operator ==(ChatConnection connection1, ChatConnection connection2)
        {
            if (Object.ReferenceEquals(connection1, connection2)) return true;
            if (Object.ReferenceEquals(null, connection2)) return false;
            return (connection1.Equals(connection2));

        }

        public static bool operator !=(ChatConnection connection1, ChatConnection connection2)
        {
            return !(connection1 == connection2);
        }

    */
    }
}