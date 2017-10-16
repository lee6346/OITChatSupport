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
            LocalDbConnectionString = "";
        }

        public string LocalDbConnectionString { get; set; }
    }
}
