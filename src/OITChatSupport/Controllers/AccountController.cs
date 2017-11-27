using Microsoft.AspNetCore.Mvc;
using OITChatSupport.Dtos;
using System.Threading.Tasks;
using OITChatSupport.Infrastructure.Security;
using OITChatSupport.Infrastructure.Configuration;
using Microsoft.Extensions.Options;

namespace OITChatSupport.Controllers
{
    [Route("[controller]")]
    public class AccountController: BaseController
    {
        private readonly ILdapAuthentication _authentication;
        private readonly LdapOptions _dn;

        public AccountController(ILdapAuthentication authentication, IOptions<LdapOptions> options)
        {
            _authentication = authentication;
            _dn = options.Value;
        }

        [HttpGet("[action]")]
        public IActionResult Login()
        {
            var res = _authentication.AuthenticateUser("jvr632", "javacracked9900");
            return Json(res);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Login([FromBody] AccountDto account)
        {
            return Json(_authentication.AuthenticateUser(account.UtsaId, "test"));
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Logout([FromBody] AgentDto agentDto)
        {
            return RedirectToAction("Login", "Account");
        }
    }
}
