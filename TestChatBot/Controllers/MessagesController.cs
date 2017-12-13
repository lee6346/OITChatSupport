using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.Bot.Connector;
using Microsoft.Bot.Builder.Dialogs;
using OITChatBot.Dialogs;
using PrintSpotBot.Infrastructure.Redis;
using System;
using StackExchange.Redis;

namespace OITChatBot
{
    [BotAuthentication]
    public class MessagesController : ApiController
    {

        public async Task<HttpResponseMessage> Post([FromBody]Activity activity)
        {
            ConnectorClient c = new ConnectorClient(new Uri(activity.ServiceUrl));
            try
            {
                var message = activity.AsMessageActivity();
                var db = RedisSharedConnection.Connection.GetDatabase();
                db.StringSet(message.Id.ToString(), message.Text);
                var test = db.StringGet(message.Id.ToString());
                
                var response = activity.CreateReply(test);
                await c.Conversations.ReplyToActivityAsync(response);
                
            }
            catch (Exception e)
            {
                var response = activity.CreateReply($"Error: {e.Message}, {e.Source}, {e.TargetSite}, {e.StackTrace}");
                await c.Conversations.ReplyToActivityAsync(response);
            }


            if (activity.Type == ActivityTypes.Message)
            {
                await Conversation.SendAsync(activity, () => new RootDialog());
            }
            else
            {
                HandleSystemActivities(activity);
            }
            return Request.CreateResponse(HttpStatusCode.OK);
        }

        
        
        private void HandleSystemActivities(Activity activity)
        {
            if (activity.Type == ActivityTypes.ConversationUpdate) { }
            else if (activity.Type == ActivityTypes.DeleteUserData) { }
            else if (activity.Type == ActivityTypes.ContactRelationUpdate) { }
            else if (activity.Type == ActivityTypes.Typing) { }
            else if (activity.Type == ActivityTypes.Ping) { }
            else if( activity.Type == ActivityTypes.Event) { }
            else if(activity.Type == ActivityTypes.EndOfConversation) { }
        }
    }
}