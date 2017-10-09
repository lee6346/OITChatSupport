using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web.Dtos;

namespace Web.Controllers
{
    [Route("api/v1/[controller]")]
    public class AgentController : BaseController
    {
        public AgentController()
        {

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
        public virtual async Task<IActionResult> GetConnected(string id)
        {
            return Json(Ok());
        }

        [HttpGet("[action]/{id}")]
        public virtual async Task<IActionResult> GetGroup(string id)
        {
            return Json(Ok());
        }


    }
}