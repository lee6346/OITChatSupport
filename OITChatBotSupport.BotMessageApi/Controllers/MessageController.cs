using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Bot.Connector;
using Microsoft.AspNetCore.Authorization;

namespace OITChatBotSupport.BotMessageApi.Controllers
{
    [Route("api/[controller]")]
    public class MessageController : Controller
    {
        [Authorize(Roles = "Bot")]
        [HttpPost]
        public async Task<OkResult> Post([FromBody]Activity activity)
        {
            if(activity.Type == ActivityTypes.Message)
            {

            }
            else
            {

            }
            return Ok();
        }

    }
}
