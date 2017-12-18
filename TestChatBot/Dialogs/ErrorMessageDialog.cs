using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Internals.Fibers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace TestChatBot.Dialogs
{
    public sealed class ErrorMessageDialog<T, E>: IDialog<T> where E : Exception 
    {
        public readonly IDialog<T> Antecedent;
        public ErrorMessageDialog(IDialog<T> antecedent)
        {
            SetField.NotNull(out this.Antecedent, nameof(antecedent), antecedent);
        }
        async Task IDialog<T>.StartAsync(IDialogContext context)
        {
            context.Call<T>(this.Antecedent, ResumeAsync);
        }

        private async Task ResumeAsync(IDialogContext context, IAwaitable<T> result)
        {
            try
            {
                context.Done(await result);
            }
            catch(Exception e)
            {
                await context.PostAsync("Network traffic is too high, try again later");
                context.Done(default(T));
            }
        }
    }
}