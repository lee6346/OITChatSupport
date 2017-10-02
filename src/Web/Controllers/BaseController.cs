using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Diagnostics;
using System.Threading.Tasks;

namespace Web.Controllers
{

    /// <summary>
    /// Base Controller class to inherit by other controllers. Contains common controller actions
    /// </summary>
    public abstract class BaseController : Controller
    {

        /// <summary>
        /// Lifecycle hook that executes before the body of any controller action is executed
        /// </summary>
        /// <param name="filterContext"></param>
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {

            //Controller base class has access to 3 data types: ViewBag, ViewData, and TempData
            //Since we are not using views, the only data of concern is the TempData which temporarily stores data that will be passed to next request deleegate
            base.OnActionExecuting(filterContext);

        }

        /// <summary>
        /// Lifecylce hook that executed after the body of any controller action has executed right before returning a response
        /// </summary>
        /// <param name="context"></param>
        public override void OnActionExecuted(ActionExecutedContext context)
        {
            base.OnActionExecuted(context);
        }

        public override Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            return base.OnActionExecutionAsync(context, next);
        }

        /// <summary>
        /// General Error Message to return
        /// </summary>
        /// <returns></returns>
        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}