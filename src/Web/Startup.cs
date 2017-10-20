using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Web.Services.ConfigBuilder;
using Web.Services;
using Microsoft.AspNetCore.Antiforgery;
using Web.Services.Hubs;
using Web.Data.Context;
using Microsoft.EntityFrameworkCore;
using Web.Repositories;
using AutoMapper;

namespace OITChatSupport.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddOptions();
            services.Configure<LdapConnectionOptions>(options => Configuration.Bind(options));
            services.Configure<DirectLineOptions>(options => Configuration.Bind(options));
            services.Configure<DataConnectionOptions>(options => Configuration.Bind(options));

            services.AddDbContext<OitChatSupportContext>(
                c => c.UseSqlServer(
                    Configuration.Get<DataConnectionOptions>().LocalDbConnectionString)
                );

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins", builder =>
                {
                    builder
                        .AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Swashbuckle.AspNetCore.Swagger.Info
                {
                    Version = "v1",
                    Title = "UTSA OIT ChatBot Support",
                    Description = "APIs and Angular SPAs for supporting student queries"
                });
            });

            services.AddScoped<ILiveRequestRepository, LiveRequestRepository>();
            services.AddScoped<IAgentRepository, AgentRepository>();
            services.AddScoped<IAgentChatRepository, AgentChatRepository>();
            services.AddScoped<IDirectLineThreadRepository, DirectLineThreadRepository>();
            services.AddScoped<IEventLogRepository, EventLogRepository>();

            services.AddScoped<ILiveTransferService, LiveTransferService>();
            services.AddScoped<IAccountService, AccountService>();
            services.AddScoped<IBotConnectionService, BotConnectionService>();
            services.AddScoped<IGroupChatService, GroupChatService>();

            services.AddSignalR();

            services.AddSingleton<IAgentHubTracker, AgentHubTracker>();

            services.AddMvc();

        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IAntiforgery antiforgery)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseCors("AllowAllOrigins");

            app.UseStaticFiles();

            app.UseSignalR(routes =>
            {
                routes.MapHub<AgentHub>("agent");
            });

            app.UseMvc(routes => {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            app.UseSwagger(c =>
            {
                c.PreSerializeFilters.Add((swagger, httpRequest) => swagger.Host = httpRequest.Host.Value);
            });

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "V1 Docs");
            });

            
        }
    }
}
