namespace Web.Services.Authentication
{
    public interface IAuthenticationService
    {
        bool AuthenticateUser(AuthenticatedUser authenticatedUser);
    }
}
