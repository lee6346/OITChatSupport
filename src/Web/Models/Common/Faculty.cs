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
        public string UtsaId { get; set; }
        public string UtsaDepartment { get; set; }
    }
}