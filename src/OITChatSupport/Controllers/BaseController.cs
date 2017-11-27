using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace OITChatSupport.Controllers
{
    public abstract class BaseController : Controller
    {
        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}