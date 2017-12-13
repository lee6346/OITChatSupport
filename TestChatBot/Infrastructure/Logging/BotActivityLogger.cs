using Dapper;
using Microsoft.Bot.Builder.History;
using Microsoft.Bot.Connector;
using System.Threading.Tasks;
using System.Configuration;
using System.Data.SqlClient;
using AutoMapper;
using OITChatBot.Models.DirectLine;

namespace OITChatBot.Infrastructure.Logging
{
    public class BotActivityLogger : IActivityLogger
    {

        public async Task LogAsync(IActivity activity)
        {
            string msgInsert = "INSERT INTO DirectLineMessage (ConversationId,Sender,Text,Timestamp) VALUES " +
            "(@ConversationId,@Sender,@Text,@Timestamp)";

            using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["SqlConnectionString"].ConnectionString))
            {
                await connection.OpenAsync();
                var mappedResult = Mapper.Map<MessageActivity>(activity.AsMessageActivity());
                connection.Execute(msgInsert, mappedResult);
                connection.Close();
            }
        }
    }
}