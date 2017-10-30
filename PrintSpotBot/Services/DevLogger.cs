using Microsoft.Bot.Builder.History;
using Microsoft.Bot.Connector;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace PrintSpotBot.Services
{
    public class DevLogger: IActivityLogger
    {
        public async Task LogAsync(IActivity activity)
        {
            Debug.WriteLine($"Conversation:{activity.Conversation.Id}\tFrom:{activity.From.Id}\tTo:{activity.Recipient.Id}\tMessage:{activity.AsMessageActivity()?.Text}");

        }
    }
}