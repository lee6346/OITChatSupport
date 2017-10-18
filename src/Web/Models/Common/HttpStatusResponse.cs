using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Models.Common
{
    public class HttpStatusResponse
    {
        private int httpStatusCode;
        private string httpStatusMessage;

        public int HttpStatusCode
        {
            get { return httpStatusCode; }
            private set { }
        }

        public string HttpStatusMessage
        {
            get { return httpStatusMessage; }
            private set { }
        }

        public HttpStatusResponse(int statusCode)
        {
            httpStatusCode = statusCode;
            switch (statusCode)
            {
                case 401:
                    httpStatusMessage = "Unauthorized Access";
                    break;
                case 402:
                case 403:
                    httpStatusMessage = "Forbidden";
                    break;
                default:
                    break;
            }
        }
    }

}
