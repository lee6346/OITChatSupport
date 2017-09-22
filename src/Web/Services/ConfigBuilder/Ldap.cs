using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.ConfigBuilder
{

    public class Ldap
    {
        public ConnectionStrings ConnectionStrings { get; set; }
        public Membership Membership { get; set; }
        public Authentication Authentication { get; set; }
    }
    public class ConnectionStrings
    {
        public string Name { get; set; }
        public string ConnectionString { get; set; }
    }

    public class Membership
    {
        public string DefaultProvider { get; set; }
        public Provider[] Providers { get; set; }

    }

    public class Provider
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string AttributeMapUserName { get; set; }
        public string ConnectionStringName { get; set; }
    }

    public class Authentication
    {
        public string Mode { get; set; }
        public Forms Forms { get; set; }
    }

    public class Forms
    {
        public string LoginUrl { get; set; }
        public int Timeout { get; set; }
    }
}
