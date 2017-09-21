using Microsoft.AspNetCore.Mvc;
using OITChatSupport.Web.Controllers;
using OITChatSupport.Web.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class ChatMessageController: BaseController
    {
        [HttpPost("[action]")]
        public async Task<IActionResult> Store(DirectLineMessageDto directLineMessageDto)
        {
            return Json(Ok());
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> Get()
        {
            return Json(Ok());
        } 
    }
}
