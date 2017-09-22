using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OITChatSupport.Web.Services.Filters
{
    public class ApiExceptionAttribute : ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {

            base.OnException(context);
        }
        // also can override Task OnExceptionAsync(ExceptionContext context)
        
    }
}