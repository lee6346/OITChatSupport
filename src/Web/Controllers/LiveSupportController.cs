using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Dtos;
using Web.Services.Hubs;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class LiveSupportController: BaseController
    {
        private readonly IHubContext<AgentHub> _agentsHubContext;
        public LiveSupportController(IHubContext<AgentHub> agentsHubContext) {
            _agentsHubContext = agentsHubContext;
        }
        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetRequests(string id)
        {
            List<LiveTransferDto> transfers = new List<LiveTransferDto>
            {
                new LiveTransferDto{ConversationId = "abc123", User = "student", BotHandle = "AskRowdy", TimeRequested = DateTime.Now},
                new LiveTransferDto{ConversationId = "jvr123", User = "student", BotHandle = "AskRowdy", TimeRequested = DateTime.Now},
                new LiveTransferDto{ConversationId = "tky123", User = "student", BotHandle = "AskRowdy", TimeRequested = DateTime.Now},
            };
            return Json(transfers);
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> MakeRequest(LiveTransferDto liveTransfer)
        {
            await _agentsHubContext.Clients.Group(liveTransfer.BotHandle).InvokeAsync("LiveTransfer", liveTransfer);
            return Json(Ok());
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> AcceptRequest(LiveTransferDto liveTransfer)
        {
            await _agentsHubContext.Clients.Group(liveTransfer.BotHandle).InvokeAsync("RemoveTransferRequest", liveTransfer);
            return Json(Ok());
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> CancelRequest(LiveTransferDto liveTransfer)
        {
            await _agentsHubContext.Clients.Group(liveTransfer.BotHandle).InvokeAsync("RemoveTransferRequest", liveTransfer);
            return Json(Ok());
        }
    }
}
