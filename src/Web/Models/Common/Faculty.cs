namespace Web.Models.Common
{

    /// <summary>
    /// Faculty: UTSA faculty to be inherited as Agents, Administrators, etc.
    /// </summary>
    public abstract class Faculty
    {
        /// <summary>
        /// Id: Utsa abc123
        /// </summary>
        public string UtsaId { get; protected set; }
        /// <summary>
        /// Rowversion: Used for database concurrncy check
        /// </summary>
        public byte[] RowVersion { get; set; }

        /*
        public override bool Equals(object obj)
        {
            var other = obj as Entity;

            if (ReferenceEquals(other, null))
                return false;

            if (ReferenceEquals(this, other))
                return true;

            if (Id == 0 || other.Id == 0)
                return false;

            return Id == other.Id;
        }

        public static bool operator ==(Faculty a, Faculty b)
        {
            if (ReferenceEquals(a, null) && ReferenceEquals(b, null))
                return true;

            if (ReferenceEquals(a, null) || ReferenceEquals(b, null))
                return false;

            return a.Equals(b);
        }

        public static bool operator !=((Faculty a, (Faculty b)
        {
            return !(a == b);
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
        */
    }
}