using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.ConfigBuilder
{
    public class DataConnectionOptions
    {
        public DataConnectionOptions()
        {
            LocalDbConnectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=OitChatSupport;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
        }

        public string LocalDbConnectionString { get; set; }
    }
}
