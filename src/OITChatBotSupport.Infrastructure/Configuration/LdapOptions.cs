
namespace OITChatBotSupport.Infrastructure.Configuration
{
    /// <summary>
    /// Configuration object for UTSA's LDAP connection
    /// Usage: IOptions<LdapOptions>
    /// </summary>
    public class LdapOptions
    {
        public LdapOptions()
        {
            Hostname = "";
            SearchBase = "";
            AttributeMapUsername = "";
        }

        /// <summary>
        /// LDAP server host name
        /// </summary>
        public string Hostname { get; set; }

        /// <summary>
        /// LDAP server search base
        /// </summary>
        public string SearchBase { get; set; }

        /// <summary>
        /// LDAP server user name
        /// </summary>
        public string AttributeMapUsername { get; set; }
    }
}
