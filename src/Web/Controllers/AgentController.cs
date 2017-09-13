using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OITChatSupport.Web.Dtos;

namespace OITChatSupport.Web.Controllers
{
    [Route("api/[controller]")]
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
        public virtual async Task<IActionResult> GetAll(string id)
        {
            return Json(Ok());
        }


    }
}