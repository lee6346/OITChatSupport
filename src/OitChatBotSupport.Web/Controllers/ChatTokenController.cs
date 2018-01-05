using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using MediatR;
using OITChatBotSupport.Application.Student.Commands;

namespace OITChatBotSupport.Web.Controllers
{
    [Route("api/[controller]")]
    public class ChatTokenController: BaseController
    {
        private readonly IMediator _mediator;
        public ChatTokenController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> NewSession()
        {
            var token = await _mediator.Send(new StartChatSession());
            return Json(token);
        }
    }
}
