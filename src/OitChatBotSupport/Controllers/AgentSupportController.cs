using MediatR;
using Microsoft.AspNetCore.Mvc;
using OITChatBotSupport.Application.OITAgents.Commands;
using OITChatBotSupport.Application.Student.Commands;
using System;
using System.Threading.Tasks;

namespace OITChatBotSupport.Controllers
{
    [Route("api/[controller]")]
    public class AgentSupportController: BaseController
    {
        private readonly IMediator _mediator;

        public AgentSupportController(IMediator mediator)
        {
            _mediator = mediator;
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
            try
            {
                var response = await _mediator.Send(transfer);
                return Json(response);
            }
            catch(Exception e)
            {
                return Json(new { Data = e.Data, Message = e.Message, Source = e.Source, Trace = e.StackTrace });
            }
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AcceptRequest([FromBody] AcceptTransfer transfer)
        {
            var response = await _mediator.Send(transfer);
            return Json(response);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> CancelRequest([FromBody] CancelTransferRequest transfer)
        {
            await _mediator.Send(transfer);
            return Json(Ok());
        }
    }
}
