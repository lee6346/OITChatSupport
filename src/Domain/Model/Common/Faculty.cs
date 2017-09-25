namespace Domain.Model.Common
{

    /// <summary>
    /// Faculty: UTSA faculty to be inherited as Agents, Administrators, etc.
    /// </summary>
    public abstract class Faculty: Entity
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
            return Equals(obj as Faculty);
        }
        /// <summary>
        /// Override equality to test using the Id property value
        /// </summary>
        /// <param name="faculty"></param>
        /// <returns></returns>
        public virtual bool Equals(Faculty faculty)
        {
            if (Object.ReferenceEquals(null, faculty)) return false;
            if (Object.ReferenceEquals(this, faculty)) return true;

            return String.Equals(Id, faculty.Id);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int hash = (int)2166136261;
                if (string.IsNullOrEmpty(this.Id))
                    return 0;
                return (hash * 16777619) ^ Id.GetHashCode();
            }
        }

        public static bool operator ==(Faculty faculty1, Faculty faculty2)
        {
            if (Object.ReferenceEquals(faculty1, faculty2)) return true;
            if (Object.ReferenceEquals(null, faculty1)) return false;
            return (faculty1.Equals(faculty2));
        }

        public static bool operator !=(Faculty faculty1, Faculty faculty2)
        {
            return !(faculty1 == faculty2);
        }
        */
    }
}