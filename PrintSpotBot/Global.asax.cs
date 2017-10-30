using System.Web;
using System.Web.Http;
using Autofac;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Internals.Fibers;
using System.Web.Mvc;
using Autofac.Integration.Mvc;
using PrintSpotBot.Data.Repositories;

namespace PrintSpotBot
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            RegisterBotDependencies();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            
            
        }

        /// <summary>
        /// Return the autofac app container
        /// Note: care when resolving in the container
        /// </summary>
        /// <returns></returns>
        public static ILifetimeScope GetContainer()
        {
            var resolver = (AutofacDependencyResolver)GlobalConfiguration.Configuration.DependencyResolver;
            return resolver.ApplicationContainer;
        }

        /// <summary>
        /// For Application Scope dependenies (data connections, etc)
        /// Note: Module dependencies registered via autofac modules
        /// </summary>
        private void RegisterBotDependencies()
        {

            Conversation.UpdateContainer(builder =>
            {
                builder.RegisterModule(new ReflectionSurrogateModule());
                builder.RegisterControllers(typeof(WebApiApplication).Assembly);
                builder.RegisterType<ActivityRepository>().Keyed<IActivityRepository>(FiberModule.Key_DoNotSerialize)
                    .AsImplementedInterfaces();

            });
            DependencyResolver.SetResolver(new AutofacDependencyResolver(Conversation.Container));
        }
    }
}
