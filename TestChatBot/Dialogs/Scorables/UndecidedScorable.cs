using Microsoft.Bot.Builder.Dialogs.Internals;
using Microsoft.Bot.Builder.Internals.Fibers;
using Microsoft.Bot.Builder.Scorables.Internals;
using Microsoft.Bot.Connector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace TestChatBot.Dialogs.Scorables
{/*
    public class UndecidedScorable: ScorableBase<IActivity, string, double>
    {
        private readonly IDialogTask _task;

        public UndecidedScorable(IDialogTask task)
        {
            SetField.NotNull(out _task, nameof(task), task);
        }

        protected override async Task<string> PrepareAsync(IActivity item, CancellationToken cancellationToken)
        {

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
            _task.
        }

        protected override Task DoneAsync(IActivity item, string state, CancellationToken token)
        {
            return Task.CompletedTask;
        }
    }*/
}