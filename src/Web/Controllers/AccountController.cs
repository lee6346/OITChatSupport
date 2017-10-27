using Microsoft.AspNetCore.Mvc;
using Web.Dtos;
using System.Threading.Tasks;
using Web.Services;

namespace Web.Controllers
{
    [Route("[controller]")]
    public class AccountController: BaseController
    {

        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet("[action]")]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Login([FromBody] AccountDto account)
        {
            if(await _accountService.AuthorizeAgent(account))
                return RedirectToAction("Agent", "Home");
            return RedirectToAction("Login", "Account");
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Logout([FromBody] AgentDto agentDto)
        {
            // destroy cookies, change agent table to not connected, and broadcast to agents
            await _accountService.DisconnectAgent(agentDto);
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
