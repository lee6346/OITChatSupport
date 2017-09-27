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

        private readonly LdapConfig _ldapConfig;
        private readonly LdapConnection _ldapConnection;

        public LdapAuthenticationService(IOptions<LdapConfig> ldapConfig)
        {
            _ldapConfig = ldapConfig.Value;
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
            _ldapConnection.Connect(_ldapConfig.Url, LdapConnection.DEFAULT_SSL_PORT);
            _ldapConnection.Bind(_ldapConfig.BindDn, _ldapConfig.BindCredentials);
            var searchFilter = string.Format(_ldapConfig.SearchFilter, utsaId);
            var result = _ldapConnection.Search(
                _ldapConfig.SearchBase,
                LdapConnection.SCOPE_SUB,
                searchFilter,
                new[] { MemberOfAttribute, DisplayNameAttribute, SamAccountNameAttribute },
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
