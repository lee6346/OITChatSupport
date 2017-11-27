using Novell.Directory.Ldap;

namespace OITChatSupport.Infrastructure.Security
{
    public interface ILdapAuthentication
    {
        LdapEntry AuthenticateUser(string name, string pass);
    }
}
