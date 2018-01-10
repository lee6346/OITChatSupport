
namespace OITChatBotSupport.Infrastructure.Configuration
{
    /// <summary>
    /// Configuration object for SQL Server
    /// Usage: IOptions
    /// </summary>
    public class SqlServerOptions
    {
        public SqlServerOptions()
        {
            LocalConnectionString = "";
        }

        /// <summary>
        /// The Sql server connectio nstring
        /// </summary>
        public string LocalConnectionString { get; set; }
    }
}
