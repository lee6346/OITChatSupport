using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

namespace Web.Services.Authorization
{
    public class AccountRequirement: IAuthorizationRequirement
    {
        public string UtsaId { get; private set; }
        public AccountRequirement(string utsaId)
        {
            UtsaId = utsaId;
        }
    }
}
