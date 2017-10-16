using Microsoft.Extensions.Options;
using Novell.Directory.Ldap;
using Web.Dtos;
using Web.Services.ConfigBuilder;

namespace Web.Services.Authentication
{
    public class LdapAuthenticationService: IAuthenticationService
    {

        private readonly LdapConnectionOptions _ldapConnectionOptions;
        private readonly LdapConnection _ldapConnection;

        public LdapAuthenticationService(IOptions<LdapConnectionOptions> ldapConnectionOptions)
        {
            _ldapConnectionOptions = ldapConnectionOptions.Value;
            _ldapConnection = new LdapConnection();
        }
        
        public bool AuthenticateUser(AccountDto accountDto)
        {
            return true;

        }
        
    }
}
