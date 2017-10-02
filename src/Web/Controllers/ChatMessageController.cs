using Microsoft.AspNetCore.Mvc;
using Web.Controllers;
using Web.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Web.Services.Hubs;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class ChatMessageController: BaseController
    {

        private readonly IHubContext<AgentHub> _hubContext;

        [HttpPost("[action]")]
        public async Task<IActionResult> StoreAgentMessage(AgentGroupMessageDto agentGroupMessageDto)
        {
            return Json(Ok());
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> StoreDirectLineMessage(DirectLineMessageDto directLineMessageDto)
        {
            return Json(Ok());
        }

        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetConversationMessages(string conversationId)
        {
            return Json(Ok());
        }

        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetGroupMessages(string agentId)
        {
            return Json(Ok());
        }
    }
}
