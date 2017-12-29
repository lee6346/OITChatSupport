using System.Web;
using System.Web.Http;
using Autofac;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Internals.Fibers;
using System.Web.Mvc;
using Autofac.Integration.Mvc;
using Microsoft.Bot.Connector;
using TestChatBot.Models.DirectLine;
using TestChatBot.Infrastructure.Logging;

namespace TestChatBot
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
