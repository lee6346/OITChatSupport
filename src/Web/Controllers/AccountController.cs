using Microsoft.AspNetCore.Mvc;
using Web.Dtos;
using System.Threading.Tasks;
using Web.Services;
using Web.Services.Authentication;
using Microsoft.Extensions.Options;
using Web.Services.ConfigBuilder;

namespace Web.Controllers
{
    [Route("[controller]")]
    public class AccountController: BaseController
    {

        private readonly IAccountService _accountService;
        private readonly IRemoteAuthentication _authentication;
        private readonly LdapConnectionOptions _dn;

        public AccountController(IAccountService accountService, IRemoteAuthentication authentication, IOptions<LdapConnectionOptions> options)
        {
            _accountService = accountService;
            _authentication = authentication;
            _dn = options.Value;
        }

        [HttpGet("[action]")]
        public IActionResult Login()
        {
            var res = _authentication.AuthenticateUser("jvr632", "javacracked9900");
            return Json(res);
            //return View();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Login([FromBody] AccountDto account)
        {

            return Json(_authentication.AuthenticateUser(account.UtsaId, "test"));
                //return Json(true);
            //return Json(false);
            //if(await _accountService.AuthorizeAgent(account))
            //    return RedirectToAction("Agent", "Home");
            //return RedirectToAction("Login", "Account");
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Logout([FromBody] AgentDto agentDto)
        {
            // destroy cookies, change agent table to not connected, and broadcast to agents
            //await _accountService.DisconnectAgent(agentDto);
            return RedirectToAction("Login", "Account");
        }

        [Route("api/[controller]")]
        [HttpGet("[action]/{group}")]
        public async Task<IActionResult> Group(string group)
        {
            var agents = await _accountService.RetrieveGroupAgents(group);
            return Json(agents);
        }
    }
}
