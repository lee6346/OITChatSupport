using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.Bot.Connector;
using PrintSpotBot.Services;
using System;
using System.Linq;

namespace PrintSpotBot
{
    [BotAuthentication(CredentialProviderType =typeof(MultibotCredentialProvider))]
    public class MessagesController : ApiController
    {

        public MessagesController()
        {

        }
        
        [BotAuthentication(CredentialProviderType =typeof(MultibotCredentialProvider))]
        public async Task<HttpResponseMessage> Post([FromBody]Activity activity)
        {
            ConnectorClient connector = new ConnectorClient(new Uri(activity.ServiceUrl));

            if (activity.Type == ActivityTypes.Message)
            {
                Activity reply = activity.CreateReply("it worked!");
                await connector.Conversations.ReplyToActivityAsync(reply);
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