using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.Authentication
{
    public interface IAuthenticationService
    {
        bool AuthenticateUser(AuthenticatedUser authenticatedUser);
    }
}
