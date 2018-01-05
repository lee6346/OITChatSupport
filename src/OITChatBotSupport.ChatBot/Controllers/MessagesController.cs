using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.Bot.Connector;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using Microsoft.Bot.Builder.Dialogs;
using OITChatBotSupport.ChatBot.Dialogs;

namespace OITChatBotSupport.ChatBot.Controllers
{
    //[BotAuthentication/*(CredentialProviderType =typeof(MultibotCredentialProvider))*/]
    [BotAuthentication]
    public class MessagesController : ApiController
    {

        //[BotAuthentication(CredentialProviderType =typeof(MultibotCredentialProvider))]
        public async Task<HttpResponseMessage> Post([FromBody]Activity activity)
        {
            ConnectorClient connector = new ConnectorClient(new Uri(activity.ServiceUrl));

            if (activity.Type == ActivityTypes.Message)
            {
                await Conversation.SendAsync(activity, () => new RootDialog());
                //Activity reply = activity.CreateReply("it worked!");
                //await connector.Conversations.ReplyToActivityAsync(reply);
            }
            else
            {
                HandleSystemMessage(activity, connector);
            }
            return Request.CreateResponse(HttpStatusCode.OK);
        }



        private Activity HandleSystemMessage(Activity message, IConnectorClient client)
        {
            if (message.Type == ActivityTypes.DeleteUserData)
            {
            }
            else if (message.Type == ActivityTypes.ConversationUpdate)
            {

            }
            else if (message.Type == ActivityTypes.ContactRelationUpdate)
            {
            }
            else if (message.Type == ActivityTypes.Typing)
            {
                
            }
            else if (message.Type == ActivityTypes.Ping)
            {
            }
            else if( message.Type == ActivityTypes.Event)
            {
                
            }
            else if(message.Type == ActivityTypes.EndOfConversation)
            {

            }
            return null;
        }
    }
}