using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Web.Http;

namespace TestChatBot
{
    public static class WebApiConfig
    {
        //Configuration for http requests and responses
        public static void Register(HttpConfiguration config)
        {
            // Json settings (ignore null JSON values, transform C# property names to camel case when mapping to JSON and vice versa, indent nested JSON objects)
            config.Formatters.JsonFormatter.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            config.Formatters.JsonFormatter.SerializerSettings.Formatting = Formatting.Indented;
            JsonConvert.DefaultSettings = () => new JsonSerializerSettings()
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                Formatting = Formatting.Indented,
                NullValueHandling = NullValueHandling.Ignore,
            };

            // Web API configuration and services
            /*
             * MapHttpRoute: used for ASP.NET Web API
             * MapRoute: used for ASP.NET
             * MapPageRoute: used for ASP.NET Web Forms
             * 
             * RouteCollection, RouteBase: Used by ASP.NET MVC and Web Forms
             * HttpRouteCollection, IHttpRoute: Used by ASP.NET Web API
             * 
             * Difference:
             * IHttpRoute
             * {
             *      IHttpRouteData GetRouteData(string virtualPathRoot, HttpRequestMessage request);
             *      IHttpVirtualPathData GetVirtualPath(HttpRequestMessage request, IDicionary<stirng, object> values);
             * }
             *  
             * abstract RouteBase
             * {
             *      RouteData GetRouteData(HttpContextBase httpContext);
             *      VirtualPathData GetVirtualPath(RequestContext requestContext, RouteValueDictionary values);
             * }
             * 
             * Why?
             *  ASP.NET Web API was designed to operate outside of IIS
             * 
             */ 
            // Web API routes
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
