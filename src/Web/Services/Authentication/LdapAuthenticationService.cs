using Microsoft.Extensions.Options;
using Novell.Directory.Ldap;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        public bool AuthenticateUser(AuthenticatedUser authenticatedUser)
        {
            _ldapConnection.Connect(_ldapConnectionOptions.Hostname, _ldapConnectionOptions.Port);
            _ldapConnection.Bind(null, null);
            var searchFilter = $"(sAMAccountName={authenticatedUser.UtsaId})";
            var result = _ldapConnection.Search(
                _ldapConnectionOptions.SearchBase,
                LdapConnection.SCOPE_BASE,
                searchFilter,
                new string[] { "samaccountname" },
                false
            );

            try
            {
                var user = result.next();
                if(user != null)
                {
                    _ldapConnection.Bind(user.DN, password);
                    if (_ldapConnection.Bound)
                    {
                        return new AuthenticatedUser
                        {
                            UtsaId = user.getAttribute(DisplayNameAttribute).StringValue,
                            Password = password
                        };
                    }
                }
            }
            catch(Exception e)
            {
                throw e;
            }
            _ldapConnection.Disconnect();
            return null;
        }
    }
}
