using Microsoft.Bot.Connector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrintSpotBot.Data.Repositories
{
    public interface IActivityRepository
    {
        Task StoreMessage(Activity activity);

    }
}
