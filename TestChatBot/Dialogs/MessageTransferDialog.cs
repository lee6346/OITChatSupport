using Microsoft.Bot.Builder.Dialogs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace TestChatBot.Dialogs
{
    public class MessageTransferDialog: IDialog<object>
    {
        public async Task StartAsync(IDialogContext context)
        {
            context.Wait(RelayMessageAsync);
            
        }

        public async Task RelayMessageAsync(IDialogContext context, IAwaitable<object> result)
        {

        }
    }
}