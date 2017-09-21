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
        [AllowAnonymous]
        public IActionResult Login()
        {
            return View();
        }


        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Login(AgentDto agentDto)
        {
            return Json(Ok());
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Logout()
        {
            return Json(Ok());
        }


    }
}
