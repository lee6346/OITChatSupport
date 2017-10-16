using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Web.Services.ConfigBuilder;

namespace Web.Data.Context
{
    public class OitChatBotContextFactory: IDesignTimeDbContextFactory<OitChatSupportContext>
    {
        public OitChatSupportContext CreateDbContext(string[] args)
        {
            var configurationBuilder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory()))
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

            var optionsBuilder = new DbContextOptionsBuilder<OitChatSupportContext>();
            optionsBuilder.UseSqlServer(configurationBuilder.Build().GetConnectionString("LocalDbConnectionString"));
            return new OitChatSupportContext(optionsBuilder.Options);
        }
    }
}
