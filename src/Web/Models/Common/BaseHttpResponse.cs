using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Common
{
    public class BaseHttpResponse
    {
        public bool Success { get; set; }
        public bool ResponseMessage { get; set; }
    }
}
