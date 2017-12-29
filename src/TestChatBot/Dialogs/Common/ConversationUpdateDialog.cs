using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;
using System.Threading.Tasks;

namespace TestChatBot.Dialogs.Common
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