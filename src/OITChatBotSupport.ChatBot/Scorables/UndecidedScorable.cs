using Microsoft.Bot.Builder.Dialogs.Internals;
using Microsoft.Bot.Builder.Internals.Fibers;
using Microsoft.Bot.Builder.Scorables.Internals;
using Microsoft.Bot.Connector;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace OITChatBotSupport.ChatBot.Scorables
{
    public class UndecidedScorable: ScorableBase<IActivity, string, double>
    {
        private readonly IDialogTask _task;

        public UndecidedScorable(IDialogTask task)
        {
            SetField.NotNull(out _task, nameof(task), task);
        }

        protected override async Task<string> PrepareAsync(IActivity item, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        protected override bool HasScore(IActivity item, string state)
        {
            return state != null;
        }

        protected override double GetScore(IActivity item, string state)
        {
            throw new NotImplementedException();
        }

        protected override Task PostAsync(IActivity item, string state, CancellationToken token)
        {
            throw new NotImplementedException();
        }

        protected override Task DoneAsync(IActivity item, string state, CancellationToken token)
        {
            return Task.CompletedTask;
        }
    }
}