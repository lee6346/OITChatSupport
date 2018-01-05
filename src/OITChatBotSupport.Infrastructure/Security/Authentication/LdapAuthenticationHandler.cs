using Novell.Directory.Ldap;
using System;
using OITChatBotSupport.Infrastructure.Configuration;
using Microsoft.Extensions.Options;

namespace OITChatBotSupport.Infrastructure.Security.Authentication
{
    public class LdapAuthenticationHandler: IDisposable, ILdapAuthenticationHandler
    {
        private readonly LdapOptions _options;
        private readonly LdapConnection _connection;
        private bool disposed = false;

        public LdapAuthenticationHandler(IOptions<LdapOptions> options)
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
                _connection.Connect(_options.Hostname, LdapConnection.DEFAULT_PORT);
                _connection.Bind("OU=People,OU=Administrative Computing Services,DC=utsarr,DC=net", "");
                var result = _connection.Search(
                    _options.SearchBase, LdapConnection.SCOPE_BASE,
                    $"(sAMAccountName={name})", new string[] { "samaccountname" }, 
                    false
                );
                return result.next();
            }
            catch(LdapException)
            {
                throw;
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                _connection.Disconnect();
            }
        }
    }
}
