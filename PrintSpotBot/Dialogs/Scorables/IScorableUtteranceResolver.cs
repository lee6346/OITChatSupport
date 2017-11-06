using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrintSpotBot.Dialogs.Scorables
{
    public interface IScorableUtteranceResolver
    {
        bool MatchesScorable(string text);
    }
}
