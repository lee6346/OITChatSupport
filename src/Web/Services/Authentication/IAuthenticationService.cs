using Web.Dtos;

namespace Web.Services.Authentication
{
    public interface IAuthenticationService
    {
        bool AuthenticateUser(AccountDto accountDto);
    }
}
