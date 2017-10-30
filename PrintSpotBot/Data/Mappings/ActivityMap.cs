using Dapper.FluentMap.Dommel.Mapping;
using Microsoft.Bot.Connector;

namespace PrintSpotBot.Data.Mappings
{
    public class ActivityMap: DommelEntityMap<Activity>
    {
        public ActivityMap()
        {
            ToTable("Activity");
            Map(activity => activity.Conversation.Id).ToColumn("ConversationId");
            Map(activity => activity.From.Id).ToColumn("Sender");
            Map(activity => activity.Timestamp).ToColumn("TimeStamp");
            Map(activity => activity.Text).ToColumn("Text");
        }
    }
}