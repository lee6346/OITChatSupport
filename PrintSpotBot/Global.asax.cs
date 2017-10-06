using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using Autofac;
using Microsoft.Bot.Builder.History;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Internals.Fibers;
using System.Web.Mvc;
using Autofac.Integration.Mvc;

namespace PrintSpotBot
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            RegisterBotDependencies();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            
        }

        private void RegisterBotDependencies()
        {

           

            Conversation.UpdateContainer(builder =>
            {
                builder.RegisterModule(new ReflectionSurrogateModule());
                builder.RegisterModule<ContosoFlowersModule>();
                builder.RegisterControllers(typeof(WebApiApplication).Assembly);
            });
            DependencyResolver.SetResolver(new AutofacDependencyResolver(Conversation.Container));
        }
    }
}
