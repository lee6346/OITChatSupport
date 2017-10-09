using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Controllers
{
    [Route("api/v1/[controller]")]
    public class LiveSupportController: BaseController
    {

        public LiveSupportController() { }

        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetRequests(string id)
        {

            return Json(Ok());

        }

        [HttpPost("[action]")]
        public async Task<IActionResult> MakeRequest(LiveTransferDto liveTransfer)
        {
            return Json(Ok());
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AcceptRequest(LiveTransferDto liveTransfer)
        {
            return Json(Ok());
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> CancelRequest(LiveTransferRequestDto liveTransfer)
        {
            return Json(Ok());
        }
    }
}
