namespace Web.Services.ConfigBuilder
{
    public class DataConnectionOptions
    {
        public DataConnectionOptions()
        {
            LocalDbConnectionString = "";
            SqlServerConnectionString = "";
        }
        
        public string LocalDbConnectionString { get; set; }
        public string SqlServerConnectionString { get; set; }
    }
}
