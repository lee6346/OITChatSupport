﻿using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Luis.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OITChatBotSupport.ChatBot.Dialogs.Locator
{
    [Serializable]
    public class PrinterLocaterDialog: IDialog<object>
    {
        public async Task StartAsync(IDialogContext context)
        {
            context.Wait<IList<EntityRecommendation>>(FindLocationHintsAsync);
        }

        public async Task FindLocationHintsAsync(IDialogContext context, IAwaitable<IList<EntityRecommendation>> resultEntities)
        {
            var locationDetails = await resultEntities;

            var campus = locationDetails.FirstOrDefault(e => e.Type == "CampusLocation");
        }
    }
}