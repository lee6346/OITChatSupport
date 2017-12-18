using Microsoft.Extensions.Options;
using Novell.Directory.Ldap;
using System;
using OITChatSupport.Infrastructure.Configuration;

namespace OITChatSupport.Infrastructure.Security
{
    public class LdapAuthentication: IDisposable, ILdapAuthentication
    {
        private readonly LdapOptions _options;
        private readonly LdapConnection _connection;
        private bool disposed = false;

        public LdapAuthentication(IOptions<LdapOptions> options)
        {
            _options = options.Value;
            _connection = new LdapConnection();
        }

        public void Dispose()
        {
            if (disposed)
            {
                return;
            }
            _connection.Dispose();
            disposed = true;
        }

        public LdapEntry AuthenticateUser(string name, string pass)
        {
            if (disposed)
            {
                throw new ObjectDisposedException(nameof(LdapConnection));
            }
            try
            {
                _connection.Connect("bush1604.utsarr.net", LdapConnection.DEFAULT_PORT/*_options.Port*/);

                
                _connection.Bind("OU=People,OU=Administrative Computing Services,DC=utsarr,DC=net", "b03f5f7f11d50a3a");
                
                var result = _connection.Search(
                    _options.SearchBase,
                    LdapConnection.SCOPE_BASE,
                    $"(sAMAccountName={name})", 
                    new string[] { "samaccountname" }, 
                    false
                );

                return result.next();

            }
            catch (Exception e)
            {
                throw e;
            }
            finally
            {
                _connection.Disconnect();
            }
        }
    }
}
