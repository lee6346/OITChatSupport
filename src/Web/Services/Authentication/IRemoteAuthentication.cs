using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Services.Authentication
{
    public interface IRemoteAuthentication
    {
        bool AuthenticateUser(AccountDto account);
    }
}
