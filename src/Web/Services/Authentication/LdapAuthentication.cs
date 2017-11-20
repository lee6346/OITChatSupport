using Microsoft.Extensions.Options;
using Novell.Directory.Ldap;
using System;
using Web.Dtos;
using Web.Services.ConfigBuilder;

namespace Web.Services.Authentication
{
    public class LdapAuthentication: IDisposable, IRemoteAuthentication
    {
        private readonly LdapConnectionOptions _options;
        private readonly LdapConnection _connection;
        private bool disposed = false;

        public LdapAuthentication(IOptions<LdapConnectionOptions> options)
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

        public bool AuthenticateUser(AccountDto accountDto)
        {
            if (disposed)
            {
                throw new ObjectDisposedException(nameof(LdapConnection));
            }
            try
            {
                _connection.Connect(_options.Hostname, _options.Port);
                _connection.Bind(null, null);

                var result = _connection.Search(
                    _options.SearchBase, LdapConnection.SCOPE_BASE,
                    $"(sAMAccountName={accountDto.UtsaId})", 
                    new string[] { "samaccountname" }, false);

                return result.Count != 0;
            }
            catch(Exception e)
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
