using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.Authentication
{
    public class LdapAuthenticationOptions
    {
        public string Hostname { get; set; }

        public int Port { get; set; } = 389;

    }
}
