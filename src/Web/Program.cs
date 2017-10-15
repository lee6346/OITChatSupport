using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace OITChatSupport.Web
{
    public class Program
    {
        public static int Main(string[] args)
        {
            BuildWebHost(args).Run();
            return 0;
        }
        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
