using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using MediatR;
using OITChatBotSupport.Application.OITAgents.Commands;
using OITChatBotSupport.Domain.AgentSupport;

namespace OITChatBotSupport.Web.Controllers
{
    [Route("[controller]")]
    public class AccountController: BaseController
    {

        private readonly IMediator _mediator;
        private readonly IAgentRepository _agentRepository;

        public AccountController(IMediator mediator, IAgentRepository agentRepository)
        {
            _mediator = mediator;
            _agentRepository = agentRepository;
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
        
        [HttpPost("[action]")]
        public async Task<IActionResult> Logout()
        {
            return RedirectToAction("Login", "Account");
        }

        [HttpGet("[action]")]
        public IActionResult Forbidden()
        {
            return View();
        }
    }
}
