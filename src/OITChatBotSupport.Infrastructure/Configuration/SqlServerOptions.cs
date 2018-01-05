
namespace OITChatBotSupport.Infrastructure.Configuration
{
    public class SqlServerOptions
    {
        public SqlServerOptions()
        {
            LocalConnectionString = "";
        }
        public string LocalConnectionString { get; set; }
    }
}
