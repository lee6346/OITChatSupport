using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace PrintSpotBot.Dialogs
{
    public class ConversationUpdateDialog: IDialog<object>
    {
        public async Task StartAsync(IDialogContext context)
        {
            context.Wait(this.UpdateReceivedAsync);
        }

        public async Task UpdateReceivedAsync(IDialogContext context, IAwaitable<IActivity> updates)
        {
            var updateActivity =  await updates;
            

        }
    }
}