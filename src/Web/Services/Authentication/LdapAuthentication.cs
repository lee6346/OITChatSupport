using Novell.Directory.Ldap;
using Web.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Services.ConfigBuilder;

namespace Web.Services.Authentication
{
    public class LdapAuthentication: IDisposable
    {
        private readonly LdapConnectionOptions _ldapConnectionOptions;
        private readonly LdapConnection _ldapConnection;
        private bool _isDisposed = false;

        public LdapAuthentication(LdapConnectionOptions ldapConnectionOptions)
        {
            _ldapConnectionOptions = ldapConnectionOptions;
            _ldapConnection = new LdapConnection();
        }

        public void Dispose()
        {
            if (_isDisposed)
            {
                return;
            }

            _ldapConnection.Dispose();
            _isDisposed = true;
        }

        public bool AuthenticateUser(AuthenticatedUser authenticatedUser)
        {
            if (_isDisposed)
            {
                throw new ObjectDisposedException(nameof(LdapConnection));
            }
            if (string.IsNullOrEmpty(_ldapConnectionOptions.Hostname))
            {
                throw new InvalidOperationException("The LDAP Hostname cannot be empty or null");

            }
            _ldapConnection.Connect(_ldapConnectionOptions.Hostname, _ldapConnectionOptions.Port);
            try
            {
                string searchFilter = $"(sAMAccountName={authenticatedUser.UtsaId})";
                //string searchFilter = $"(&(sAMAccountName={authenticatedUser.UtsaId})(password={authenticatedUser.Password}))";
                _ldapConnection.Bind(null, null);
                LdapSearchResults user = _ldapConnection.Search(_ldapConnectionOptions.SearchBase, LdapConnection.SCOPE_BASE, searchFilter, new string[] { "samaccountname" }, false);
                if(user.Count == 0)
                {
                    return false;
                }
                return true;
            }
            catch(LdapException e)
            {
                throw e;
            }
            finally
            {
                _ldapConnection.Disconnect();
            }
        }



    }
}
