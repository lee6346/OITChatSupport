using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Dtos;
using Web.Services;
using Web.Services.Hubs;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class LiveSupportController: BaseController
    {
        private readonly ILiveTransferService _liveTransferService;
        public LiveSupportController(ILiveTransferService liveTransferService) {
            _liveTransferService = liveTransferService;
        }
        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetRequests(string id)
        {
            var requests = await _liveTransferService.GetPendingRequestsAsync(agent);
            return Json(requests);
            /*
            List<LiveTransferDto> transfers = new List<LiveTransferDto>
            {
                new LiveTransferDto{ConversationId = "abc123", User = "student", BotHandle = "AskRowdy", TimeRequested = DateTime.Now},
                new LiveTransferDto{ConversationId = "jvr123", User = "student", BotHandle = "AskRowdy", TimeRequested = DateTime.Now},
                new LiveTransferDto{ConversationId = "tky123", User = "student", BotHandle = "AskRowdy", TimeRequested = DateTime.Now},
            };
            return Json(transfers);
            */
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> MakeRequest([FromBody] LiveTransferDto liveTransfer)
        {
            await _liveTransferService.RequestLiveAgentAsync(liveTransfer);
            return Json(Ok());
            //await _agentsHubContext.Clients.Group(liveTransfer.BotHandle).InvokeAsync("LiveTransfer", liveTransfer);

        }
        [HttpPost("[action]")]
        public async Task<IActionResult> AcceptRequest([FromBody] SupportTransferDto support)
        {
            await _liveTransferService.AcceptPendingRequestAsync(support);
            //await _agentsHubContext.Clients.Group(liveTransfer.BotHandle).InvokeAsync("RemoveTransferRequest", liveTransfer);
            return Json(Ok());
        }

    }
}
