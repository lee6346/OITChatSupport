using Novell.Directory.Ldap;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.Authentication
{
    public class LdapAuthentication: IDisposable
    {
        private readonly LdapAuthenticationOptions _ldapAuthenticationOptions;
        private readonly LdapConnection _ldapConnection;
        private bool _isDisposed = false;

        public LdapAuthentication(LdapAuthenticationOptions ldapAuthenticationOptions)
        {
            _ldapAuthenticationOptions = ldapAuthenticationOptions;
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

        public bool ValidatePassword(string distinguisedName, string password)
        {
            if (_isDisposed)
            {
                throw new ObjectDisposedException(nameof(LdapConnection));
            }
            if (string.IsNullOrEmpty(_ldapAuthenticationOptions.Hostname))
            {
                throw new InvalidOperationException("The LDAP Hostname cannot be empty or null");

            }

            _ldapConnection.Connect(_ldapAuthenticationOptions.Hostname, _ldapAuthenticationOptions.Port);
            try
            {
                _ldapConnection.Bind(distinguisedName, password);
                return true;
            }
            catch(Exception ex)
            {
                throw ex;
            }
            finally
            {
                _ldapConnection.Dispose();
            }
        }

    }
}
