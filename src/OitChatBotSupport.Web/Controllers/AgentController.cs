using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using MediatR;
using OITChatBotSupport.Application.OITAgents.Commands;

namespace OITChatBotSupport.Web.Controllers
{
    [Route("api/[controller]")]
    public class AgentController: BaseController
    {
        private readonly IMediator _mediator;

        public AgentController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> Members()
        {
            var agents = await _mediator.Send(new GetAgentGroup(false));
            return Json(agents);
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GroupMessages()
        {
            var messages = await _mediator.Send(new GetGroupMessages());
            return Json(messages);
        }
    }
}
