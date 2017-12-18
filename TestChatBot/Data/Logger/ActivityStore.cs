using Dapper;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.History;
using Microsoft.Bot.Connector;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace TestChatBot.Data.Logger
{
    public class ActivityStore: IActivityLogger
    {
        private readonly ISqlConnectionFactory _connectionFactory;
        
        public ActivityStore(ISqlConnectionFactory connectionFactory)
        {
            _connectionFactory = connectionFactory;
        }

        public async Task LogAsync(IActivity activity)
        {
            //IDbConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["sqlConnectionString"].ConnectionString);
            //var y = conn.ConnectionString;//ConfigurationManager.ConnectionStrings["sqlConnectionString"].ConnectionString;//conn.ConnectionString;
           if(activity.Type == ActivityTypes.Message)
            {
                ConnectorClient c = new ConnectorClient(new Uri(activity.ServiceUrl));

                using (IDbConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["sqlConnectionString"].ConnectionString))
                {
                    string sqlCommand = "INSERT INTO Activity " +
                "(ConversationId, Sender, Text, TimeStamp) values " +
                "(@ConversationId, @Sender, @Text, @TimeStamp)";
                    
                    try
                    {
                        conn.Open();
                        var rowsAffected = await conn.ExecuteAsync(sqlCommand,
                    new
                    {
                        ConversationId = activity.Conversation.Id,
                        Sender = activity.From.Id,
                        Text = activity.AsMessageActivity().Text,
                        TimeStamp = DateTime.UtcNow.ToString()
                    });
                        var z = ((Activity)activity).CreateReply("success");
                        await c.Conversations.ReplyToActivityAsync(z);
                    }
                    catch(Exception e)
                    {
                        var z = ((Activity)activity).CreateReply(e.ToString());
                        await c.Conversations.ReplyToActivityAsync(z);
                    }

                }
            }
            /*
            if (activity.Type == ActivityTypes.Message)
            {
                await StoreMessage(activity.AsMessageActivity());
            }
            else if (activity.Type == ActivityTypes.ConversationUpdate)
            {
                await StoreConnection(activity.AsConversationUpdateActivity());
            }*/
        }

        public async Task StoreMessage(IMessageActivity message)
        {
            string sqlCommand = "INSERT INTO Activity " +
                "(ConversationId, Sender, Text, TimeStamp) values " +
                "(@ConversationId, @Sender, @Text, @TimeStamp)";

            using (var connection = _connectionFactory.MakeConnection())
            {
                var rowsAffected = await connection.ExecuteAsync(sqlCommand, 
                    new {ConversationId=message.Conversation.Id,Sender=message.From.Id,
                        Text=message.Text,TimeStamp=DateTime.UtcNow.ToString() });

                if (rowsAffected <= 0)
                {
                    throw new DataException("Failed to insert message into database");
                }
            }
        }

        public async Task StoreConnection(IConversationUpdateActivity conversationUpdate)
        {
            string sqlCommand = "INSERT INTO ConnectionEvent " +
                "(ConversationId, User, Event_Type, Timestamp) values " +
                "(@ConversationId, @User, @EventType, @Timestamp)";

            string membersUpdate = conversationUpdate.MembersAdded.Count > 0 ? "Connected" : "Disconnected";

            using (var connection = _connectionFactory.MakeConnection())
            {
                var rowsAffected = await connection.ExecuteAsync(sqlCommand, 
                    new {ConversationId=conversationUpdate.Conversation.Id,Sender=conversationUpdate.From.Id,
                        EventType=membersUpdate,Timestamp=DateTime.UtcNow.ToString() });

                if (rowsAffected <= 0)
                {   
                    throw new DataException("Failed to insert connection event into database");
                }     
            }
        }
    }
}