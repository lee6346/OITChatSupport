using Microsoft.AspNetCore.Mvc;
using OITChatSupport.Web.Dtos;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OITChatSupport.Web.Controllers
{
    /// <summary>
    /// Handles live transfers between agents and users
    /// </summary>
    [Route("api/[controller]")]
    public class AgentTransferController : Controller
    {

        /// <summary>
        /// Injects ... services
        /// </summary>
        public AgentTransferController()
        {
        }

        /// <summary>
        /// Get Pending live agent requests for specified agent's department
        /// </summary>
        /// <param name="id">Agent's utsa id</param>
        /// <returns>List of pending requests for agent's department</returns>
        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetRequests(string id)
        {
            return Json(Ok());

        }

        /// <summary>
        /// Make a request for live agent support 
        /// </summary>
        /// <param name="liveTransfer">Object with conversation id, action, and time requested</param>
        /// <returns>Ok, throw error on failure</returns>
        [HttpPost("[action]")]
        public async Task<IActionResult> MakeRequest(LiveTransferDto liveTransfer)
        {
            return Json(Ok());
        }

        /// <summary>
        /// Accept a pending live request by agent
        /// </summary>
        /// <param name="liveTransfer">Object with conversation id, action, and time requested</param>
        /// <returns>Ok, throw error on failure</returns>
        [HttpPost("[action]")]
        public async Task<IActionResult> AcceptRequest(LiveTransferDto liveTransfer)
        {
            return Json(Ok());
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> CancelRequest(LiveTransferDto liveTransfer)
        {
            return Json(Ok());
        }


    }
}