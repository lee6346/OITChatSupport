using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web.Dtos;
using System.Collections.Generic;
using System;
using Microsoft.AspNetCore.SignalR;
using Web.Services.Hubs;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class AgentController : BaseController
    {
        private readonly IHubContext<AgentHub> _agentsContext;
        public AgentController(IHubContext<AgentHub> agentsContext)
        {
            _agentsContext = agentsContext;
        }
        [HttpPost("[action]")]
        public virtual async Task<IActionResult> Connect(AgentDto agentDto)
        {  
            return Json(Ok());
        }
        [HttpPost("[action]")]
        public virtual async Task<IActionResult> Disconnect(AgentDto agentDto)
        {
            return Json(Ok());
        }
        [HttpGet("[action]/{id}")]
        public virtual async Task<IActionResult> GetGroup(string id)
        {
            List<AgentDto> agents = new List<AgentDto>
            {
                new AgentDto{AgentId = "jvr632", BotHandle = "AskRowdy", Connected = true, TimeStamp = DateTime.UtcNow},
                new AgentDto{AgentId = "kjf596", BotHandle = "AskRowdy", Connected = false, TimeStamp = DateTime.UtcNow},
                new AgentDto{AgentId = "aaa343", BotHandle = "AskRowdy", Connected = true, TimeStamp = DateTime.UtcNow}
            };
            return Json(agents);
        }
    }
}