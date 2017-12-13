using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using MediatR;
using OITChatBotSupport.Application.OITAgents.Commands;

namespace OITChatBotSupport.Controllers
{
    [Route("[controller]")]
    public class AccountController: BaseController
    {

        private readonly IMediator _mediator;

        public AccountController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("[action]")]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Login([FromBody] AuthorizeAgent agent)
        {
            
            if(await _mediator.Send(agent))
                return RedirectToAction("Agent", "Home");
            return RedirectToAction("Login", "Account");
        }
        /*
        [HttpPost("[action]")]
        public async Task<IActionResult> Logout()
        {
            return RedirectToAction("Login", "Account");
        }*/
    }
}
