using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace OITChatSupport.Web.Services.Helpers
{
    public class HttpRequestBuilder
    {
        private HttpMethod method = null;
        private string requestUri = "";
        private HttpContent content = null;
        private string acceptHeader = "application/json";
        private TimeSpan timeout = new TimeSpan(0, 0, 10);

        public HttpRequestBuilder(HttpMethod method, string requestUri, HttpContent content)
        {
            this.method = method;
            this.requestUri = requestUri;
            this.content = content;
        }

        public HttpRequestBuilder() : this(null, "", null)
        {
        }

        public HttpRequestBuilder AddRequestMethod(HttpMethod method)
        {
            this.method = method;
            return this;
        }

        public HttpRequestBuilder AddRequestUri(string requestUri)
        {
            this.requestUri = requestUri;
            return this;
        }

        public HttpRequestBuilder AddHttpContent(HttpContent content)
        {
            this.content = content;
            return this;
        }

        public HttpRequestBuilder HttpRequest()
        {
            return this;
        }
        /*
        public async Task<HttpResponseMessage> SendAsync()
        {
        }
        */
    }
}