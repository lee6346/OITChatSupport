using Novell.Directory.Ldap;

namespace OITChatBotSupport.Infrastructure.Security.Authentication
{
    public interface ILdapAuthenticationHandler
    {
        LdapEntry AuthenticateUser(string name, string password);
    }
}
