using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web.Dtos;
using System.Collections.Generic;
using System;
using Microsoft.AspNetCore.SignalR;
using Web.Services.Hubs;
using Web.Repositories;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class AgentController : BaseController
    {
        private readonly IHubContext<AgentHub> _agentsContext;
        private readonly IAgentRepository _agentRepository;
        public AgentController(IHubContext<AgentHub> agentsContext, IAgentRepository agentRepository)
        {
            _agentsContext = agentsContext;
            _agentRepository = agentRepository;
        }
        /*
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
        */
        [HttpGet("[action]/{id}")]
        public virtual async Task<IActionResult> GetGroup(string id)
        {
            var agent = await _agentRepository.GetByIdAsync(id);
            var group = await _agentRepository.GetByDepartmentAsync(agent.UtsaDepartment, true);
            /*
            List<AgentDto> agents = new List<AgentDto>
            {
                new AgentDto{AgentId = "jvr632", BotHandle = "AskRowdy", Connected = true, TimeStamp = DateTime.UtcNow},
                new AgentDto{AgentId = "kjf596", BotHandle = "AskRowdy", Connected = false, TimeStamp = DateTime.UtcNow},
                new AgentDto{AgentId = "aaa343", BotHandle = "AskRowdy", Connected = true, TimeStamp = DateTime.UtcNow}
            };*/
            return Json(group);
        }
    }
}