using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.ConfigBuilder
{
    public class Membership
    {
        public string DefaultProvider { get; set; }
        public Provider[] Providers {get; set;}

    }

    public class Provider
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string AttributeMapUserName { get; set; }
        public string ConnectionStringName { get; set; }
    }
}
