using Microsoft.AspNetCore.Mvc;
using Web.Dtos;
using System.Threading.Tasks;
using Web.Services;

namespace Web.Controllers
{
    public class AccountController: BaseController
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
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

        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> Group(string id)
        {
            var agents = await _accountService.RetrieveGroupAgents(id);
            return Json(agents);
        }
    }
}
