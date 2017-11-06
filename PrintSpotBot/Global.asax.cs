using System.Web;
using System.Web.Http;
using Autofac;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Internals.Fibers;
using System.Web.Mvc;
using Autofac.Integration.Mvc;
using PrintSpotBot.Data.Logger;
using PrintSpotBot.Data;

namespace PrintSpotBot
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            RegisterBotDependencies();
            GlobalConfiguration.Configure(WebApiConfig.Register);
   
        }

        public static ILifetimeScope GetContainer()
        {
            var resolver = (AutofacDependencyResolver)GlobalConfiguration.Configuration.DependencyResolver;
            return resolver.ApplicationContainer;
        }

        private void RegisterBotDependencies()
        {
            
            Conversation.UpdateContainer(builder =>
            {
                builder.RegisterModule(new ReflectionSurrogateModule());
                builder.RegisterControllers(typeof(WebApiApplication).Assembly);
                
                builder.RegisterType<SqlConnectionFactory>()
                .Keyed<ISqlConnectionFactory>(FiberModule.Key_DoNotSerialize)
                .AsImplementedInterfaces().SingleInstance();

                builder.RegisterType<ActivityStore>().AsImplementedInterfaces().InstancePerDependency();
                
            });
            DependencyResolver.SetResolver(new AutofacDependencyResolver(Conversation.Container)); 
        }
    }
}
