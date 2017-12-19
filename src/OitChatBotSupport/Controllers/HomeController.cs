using Microsoft.AspNetCore.Mvc;
namespace OITChatBotSupport.Controllers
{
    /// <summary>
    /// Controller for serving angular applications 
    /// </summary>
    public class HomeController : BaseController
    {
        /// <summary>
        /// Serve angular app for user
        /// </summary>
        /// <returns>Returns a view template with the bundled angualr app injected in its tag</returns>
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

        public IActionResult Chatbot()
        {
            return View();
        }
    }
}