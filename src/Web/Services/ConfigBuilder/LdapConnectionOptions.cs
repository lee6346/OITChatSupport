﻿
namespace Web.Services.ConfigBuilder
{
    public class LdapConnectionOptions
    {
        public LdapConnectionOptions()
        {
            Hostname = "hostname";
            Port = 0;
            Url = "";
            SearchBase = "";
            AttributeMapUsername = "";
            PublicKeyToken = "";
        }
        public string Hostname { get; set; }
        public int Port { get; set; }
        public string Url { get; set; }
        public string SearchBase { get; set; }
        public string AttributeMapUsername { get; set; }
        public string PublicKeyToken { get; set; }
    }
}
