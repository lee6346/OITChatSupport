using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Threading;
using Web.Services.ConfigBuilder;

namespace Web.Services.Authentication
{
    public class LdapUserManager<TUser> : UserManager<TUser>
        where TUser: class
    {

        private readonly LdapConnectionOptions _ldapOptions;

        public LdapUserManager(IUserStore<TUser> store, IOptions<IdentityOptions> optionsAccessor, IPasswordHasher<TUser> passwordHasher,
            IEnumerable<IUserValidator<TUser>> userValidators, IEnumerable<IPasswordValidator<TUser>> passwordValidators, ILookupNormalizer keyNormalizaer,
            IdentityErrorDescriber errors, IServiceProvider services, ILogger<UserManager<TUser>> logger, IOptions<LdapConnectionOptions> ldapOptions): base(store, optionsAccessor,
                passwordHasher, userValidators, passwordValidators, keyNormalizaer, errors, services, logger)
        {
            _ldapOptions = ldapOptions.Value;
        }
        /*
        public override async Task<bool> CheckPasswordAsync(TUser user, string password)
        {
            using (var auth = new LdapAuthentication(_ldapOptions))
            {
                string dn;
                if(this.Store is IUserLdapStore<TUser>)
                {
                    dn = await ((IUserLdapStore<TUser>)this.Store).GetDistinguishedNameAsync(user);
                }
                else
                {
                    dn = await this.Store.GetNormalizedUserNameAsync(user, CancellationToken.None);
                }
                if(auth.ValidatePassword(dn, password))
                {
                    return true;
                }
            }
            return false;
        }
        */

        protected override Task<PasswordVerificationResult> VerifyPasswordAsync(IUserPasswordStore<TUser> store, TUser user, string password)
        {
            throw new NotSupportedException();
        }
    }


}
