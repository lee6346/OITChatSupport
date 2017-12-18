using System;
using System.Threading.Tasks;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;

<<<<<<< HEAD:TestChatBot/Dialogs/RootDialog.cs
namespace OITChatBot.Dialogs
=======
namespace TestChatBot.Dialogs
>>>>>>> d4a7f38683ce295392ee412c33ae443be27d500e:TestChatBot/Dialogs/RootDialog.cs
{
    [Serializable]
    public class RootDialog : IDialog<object>
    {
        public async Task StartAsync(IDialogContext context)
        {
            context.Wait(MessageReceivedAsync);
        }

        public async Task MessageReceivedAsync(IDialogContext context, IAwaitable<IMessageActivity> result)
        {
            var activity = await result as Activity;
            
            await context.PostAsync(activity.CreateReply("YO"));
            context.Wait(MessageReceivedAsync);
        }
    }
}