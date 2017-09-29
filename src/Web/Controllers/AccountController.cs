using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OITChatSupport.Web.Controllers;
using OITChatSupport.Web.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Controllers
{
    public class AccountController: BaseController
    {
        public AccountController()
        {

        }


        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }


        [HttpPost]
        public async Task<IActionResult> Login([FromBody] AgentDto agentDto)
        {
            //if authentication checks out

            return RedirectToAction("Agent", "Home");
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Logout([FromBody] AgentDto agentDto)
        {
            // destroy cookies, change agent table to not connected, and broadcast to agents
            return RedirectToAction("Login", "Account");
        }



    }
}
