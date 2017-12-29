using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Internals.Fibers;
using System;
using System.Threading.Tasks;

namespace TestChatBot.Dialogs.Common
{
    public sealed class ErrorMessageDialog<T, E>: IDialog<T> where E : Exception 
    {
        public readonly IDialog<T> Antecedent;
        public ErrorMessageDialog(IDialog<T> antecedent)
        {
            SetField.NotNull(out Antecedent, nameof(antecedent), antecedent);
        }
        async Task IDialog<T>.StartAsync(IDialogContext context)
        {
            context.Call<T>(Antecedent, ResumeAsync);
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