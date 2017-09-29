using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace Web.Services.Authorization
{
    public class AgentAuthorizationHandler: AuthorizationHandler<AccountRequirement>
    {
        protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, AccountRequirement requirement)
        {
            //if (!context.User.HasClaim(c => c.Type == ClaimTypes.)) { }

        }
    }
}
