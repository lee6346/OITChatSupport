using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Dialogs.Internals;
using Microsoft.Bot.Builder.Luis;
using Microsoft.Bot.Builder.Luis.Models;
using Microsoft.Bot.Connector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace TestChatBot.Dialogs
{
    [LuisModel("1b0c0f90-80be-45d1-9c29-cdcdc8f6939d", "6a27c5e535b24fd9a8247fc4cfa0e2ca")]
    [Serializable]
    public class PrintSpotLuisDialog: LuisDialog<object>
    {

        [LuisIntent("None")]
        public async Task None(IDialogContext context, LuisResult result)
        {

        }
    }
}