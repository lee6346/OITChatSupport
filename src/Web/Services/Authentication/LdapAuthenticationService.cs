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
        private const string MemberOfAttribute = "memberOf";
        private const string DisplayNameAttribute = "displayName";
        private const string SamAccountNameAttribute = "samAccountName";

        private readonly Ldap _ldap;
        private readonly LdapConnection _ldapConnection;

        public LdapAuthenticationService(IOptions<Ldap> ldapConfig)
        {
            _ldap = ldapConfig.Value;
            _ldapConnection = new LdapConnection
            {
                SecureSocketLayer = true,
                //ConnectionTimeout: in milliseconds how long to keep the TCP
                //Constraints: set of LdapConstraints associated with this connection
                //SaslBindProperties: returns properties binded with SASL mechanism (null if no auth)
                
            };
        }

        public AuthenticatedUser Login(string utsaId, string password)
        {
            //Connect("ADServrName", PortNo)
            //Bind(@"domain\username", "password")
            _ldapConnection.Connect(_ldap.ConnectionStrings.ConnectionString, LdapConnection.DEFAULT_SSL_PORT);
            _ldapConnection.Bind(_ldap.ConnectionStrings.ConnectionString, _ldap.Membership.DefaultProvider);
            _ldapConnection.
            var searchFilter = string.Format(_ldap.)
        }
    }
}
