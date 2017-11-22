using Novell.Directory.Ldap;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Services.Authentication
{
    public interface IRemoteAuthentication
    {
        LdapEntry AuthenticateUser(string name, string pass);
    }
}
