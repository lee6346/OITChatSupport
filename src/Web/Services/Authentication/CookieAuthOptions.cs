using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.Extensions.Options;

namespace Web.Services.Authentication
{
    public class CookieAuthOptions: IConfigureNamedOptions<CookieAuthenticationOptions>
    {
        private readonly ITicketStore _store;
        public CookieAuthOptions(ITicketStore store)
        {
            _store = store;
        }

        public void Configure(string name, CookieAuthenticationOptions options)
        {
            if(name == CookieAuthenticationDefaults.AuthenticationScheme)
            {
                options.LoginPath = "/login";
                options.SessionStore = _store;
            }
        }

        public void Configure(CookieAuthenticationOptions options)
        {

        }

        /*
         * In start up:
         * services.AddMemoryCache();
         * services.AddSingleton<IConfigureOptions<CookieAuthenticationOptions>, CookieAuthOptions>();
         * services.AddSingleton<ITicketStore, MemoryCacheTicketStore>();
         * services.AddAuthentication().AddCookie().AddCookie("AnotherCookie");
         * 
         * ... in configure
         * app.Run(async (context) => {
         *  if(context.Request.Path == "/login")
         *  {
         *      await context.SignInAsync(new ClaimsPrincipal(new ClaimsIdentity("Cookies")));
         *      return;
         *  }
         *  //get cookie auth result
         *  var cookieResult = await context.AuthenticateAsync("Cookies");
         *  //get other cookie auth result (for show, that optiosn can configure multiple schemes)
         *  var otherCookieResult = await context.AuthenticateAsync("AnotherCookie");
         *  
         *  if(cookieResult.Succeeded){
         *      await context.Response.WriteAsync("Hello you made it");
         *      return;
         *  }
         *  await context.ChallengeAsync("Cookies");
         *  });
         */  
    }
}
