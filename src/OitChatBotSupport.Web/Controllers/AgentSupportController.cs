using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using OITChatBotSupport.Application.OITAgents.Commands;
using OITChatBotSupport.Application.Student.Commands;
using OITChatBotSupport.Web.Hubs;
using System.Threading.Tasks;

namespace OITChatBotSupport.Web.Controllers
{
    [Route("api/[controller]")]
    public class AgentSupportController: BaseController
    {
        private readonly IMediator _mediator;
        private readonly IHubContext<AgentHub> _agentHub;

        public AgentSupportController(IMediator mediator, IHubContext<AgentHub> agentHub)
        {
            _mediator = mediator;
            _agentHub = agentHub;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> CurrentRequests()
        {
            var response = await _mediator.Send(new GetPendingRequests());
            return Json(response);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> MakeRequest([FromBody] RequestTransfer transfer)
        {
            var response = await _mediator.Send(transfer);
            await _agentHub.Clients.Group("UTSA").InvokeAsync("LiveTransfer", transfer);
            return Json(response);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AcceptRequest([FromBody] AcceptTransfer transfer)
        {
            var response = await _mediator.Send(transfer);
            await _agentHub.Clients.Group("UTSA").InvokeAsync("RemoveTransferRequest", new {conversationId=transfer.ConversationId});
            return Json(response);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> CancelRequest([FromBody] CancelTransferRequest transfer)
        {
            await _mediator.Send(transfer);
            await _agentHub.Clients.Group("UTSA").InvokeAsync("RemoveTransferRequest", new {conversationId=transfer.ConversationId});
            return Json(Ok());
        }
    }
}
