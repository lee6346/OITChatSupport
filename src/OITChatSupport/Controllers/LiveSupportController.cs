using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using OITChatSupport.Infrastructure.REST;
using OITChatSupport.Application.Services;
using OITChatSupport.Application.Dtos;

namespace OITChatSupport.Controllers
{
    [Route("api/[controller]")]
    public class LiveSupportController: BaseController
    {
        private readonly ILiveTransferService _liveTransferService;
        private readonly IDirectLineGateway _botConnectionService;

        public LiveSupportController(
            ILiveTransferService liveTransferService, IDirectLineGateway botConnectionService)
        {
            _liveTransferService = liveTransferService;
            _botConnectionService = botConnectionService;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetRequests()
        {
            var requests = await _liveTransferService.GetPendingRequestsAsync();
            return Json(requests);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> MakeRequest([FromBody] LiveTransferDto liveTransfer)
        {
            await _liveTransferService.RequestLiveAgentAsync(liveTransfer);
            return Json(Ok());

        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AcceptRequest([FromBody] LiveTransferDto liveSupport)
        {
            await _liveTransferService.AcceptPendingRequestAsync(liveSupport);
            var connection = await _botConnectionService.GetConnectionStreamAsync(liveSupport.ConversationId);
            return Json(connection);
        }

    }
}
