using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Web.Dtos;
using Web.Services;
namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class LiveSupportController: BaseController
    {
        private readonly ILiveTransferService _liveTransferService;
        private readonly IBotConnectionService _botConnectionService;

        public LiveSupportController(
            ILiveTransferService liveTransferService, IBotConnectionService botConnectionService)
        {
            _liveTransferService = liveTransferService;
            _botConnectionService = botConnectionService;
        }

        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetRequests(string id)
        {
            var requests = await _liveTransferService.GetPendingRequestsAsync(id);
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
            var connection = _botConnectionService.GetConnectionStreamAsync(liveSupport.ConversationId);
            return Json(connection);
        }

    }
}
