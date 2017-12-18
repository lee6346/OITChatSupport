
namespace OITChatSupport.Infrastructure.Configuration
{
    public class SqlServerOptions
    {
        public SqlServerOptions()
        {
            LocalConnectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=OitChatSupport;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
            ConnectionString = "";
        }

        public string LocalConnectionString { get; set; }
        public string ConnectionString { get; set; }
    }
}
