using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.Authentication
{
    public interface IUserLdapStore<TUser>
        where TUser: class
    {
        Task<string> GetDistinguishedNameAsync(TUser user);
    }
}
