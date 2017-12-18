using System.Web;
using System.Web.Http;
using Autofac;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Internals.Fibers;
using System.Web.Mvc;
using Autofac.Integration.Mvc;
<<<<<<< HEAD:TestChatBot/Global.asax.cs
using OITChatBot.Infrastructure.Logging;
using Microsoft.Bot.Connector;
using OITChatBot.Models.DirectLine;
using OITChatBot.Infrastructure.Persistence;
using PrintSpotBot.Infrastructure;
using System.Reflection;

namespace OITChatBot
=======
using TestChatBot.Data.Logger;
using TestChatBot.Data;

namespace TestChatBot
>>>>>>> d4a7f38683ce295392ee412c33ae443be27d500e:TestChatBot/Global.asax.cs
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            RegisterBotDependencies();
            GlobalConfiguration.Configure(WebApiConfig.Register);

            AutoMapper.Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<IMessageActivity, MessageActivity>()
                    .ForMember(dest => dest.Sender, opt => opt.MapFrom(src => src.From.Id))
                    .ForMember(dest => dest.ConversationId, opt => opt.MapFrom(src => src.Conversation.Id));
            });

            
            
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
                builder.RegisterType<BotActivityLogger>().AsImplementedInterfaces().InstancePerDependency();
                builder.RegisterControllers(typeof(WebApiApplication).Assembly);
                
            });
            DependencyResolver.SetResolver(new AutofacDependencyResolver(Conversation.Container)); 
        }
    }
}
