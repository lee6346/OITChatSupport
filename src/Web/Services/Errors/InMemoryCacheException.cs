using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OITChatSupportWeb.Web.Services.Errors
{
    public class InMemoryCacheException: Exception
    {


        public InMemoryCacheException(string message): base(message)
        {

        }
    }
}
