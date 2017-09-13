using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OITChatSupport.Web.Services.Filters.Attribute
{
    public class ValidationAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuted(ActionExecutedContext context)
        {
            if (!context.ModelState.IsValid)
            {
                //setting the Result property short-circuits the request
                //since many actions in a controller might need this, add to controller rathre than each action
                context.Result = new BadRequestObjectResult(context.ModelState);
            }
        }

    }
}