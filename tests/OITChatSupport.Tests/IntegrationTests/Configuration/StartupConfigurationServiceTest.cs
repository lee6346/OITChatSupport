using Castle.Core.Logging;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace Web.Tests.IntegrationTests.Configuration
{
    public class StartupConfigurationServiceTest<TDbContext>: IStartupConfigurationService where TDbContext: DbContext
    {
        public virtual void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            //SetupStore(app);
        }

        public virtual void ConfigureEnvironment(IHostingEnvironment env)
        {
            env.EnvironmentName = "Test";
        }

        public virtual void ConfigureService(IServiceCollection service, IConfigurationRoot configuration)
        {
            //ConfigureStore
        }
    }
}
