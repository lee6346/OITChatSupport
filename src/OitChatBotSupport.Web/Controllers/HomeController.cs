using Microsoft.AspNetCore.Mvc;
namespace OITChatBotSupport.Web.Controllers
{
    /// <summary>
    /// Controller for serving angular applications 
    /// </summary>
    public class HomeController : BaseController
    {

        public IActionResult Index()
        {
            return View();
        }
        /// <summary>
        /// Serve angular app for agents
        /// </summary>
        /// <returns>Returns a view template with the bundled angualr app injected in its tag</returns>
        public IActionResult Agent()
        {

            return View();
        }
    }
}