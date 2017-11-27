using System;
using System.Threading.Tasks;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;
using System.Threading;
using Microsoft.Bot.Builder.Luis;
using Microsoft.Bot.Builder.Dialogs.Internals;

namespace TestChatBot.Dialogs
{

    [Serializable]
    public class RootDialog : IDialog<object>
    {
        public Task StartAsync(IDialogContext context)
        {

 
            context.Wait(MessageReceivedAsync);
            return Task.CompletedTask;

        }

        private async Task MessageReceivedAsync(IDialogContext context, IAwaitable<IMessageActivity> result)
        {
            
            
            var activity = await result as Activity;
            
            await context.PostAsync(activity.CreateReply("YO"));
            context.Wait(MessageReceivedAsync);
        }
    }
}