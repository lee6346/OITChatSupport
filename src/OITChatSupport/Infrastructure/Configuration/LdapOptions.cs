
namespace OITChatSupport.Infrastructure.Configuration
{
    public class LdapOptions
    {
        public LdapOptions()
        {
            Hostname = "";
            SearchBase = "";
            AttributeMapUsername = "";
        }
        public string Hostname { get; set; }
        public string SearchBase { get; set; }
        public string AttributeMapUsername { get; set; }
    }
}
