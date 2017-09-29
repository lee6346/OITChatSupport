namespace Web.Models.Common
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
    }
}