using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Model.Common
{
    [Flags]
    public enum ChatParticipant
    {
        User,
        Bot,
        Agent,
        All
    }
}
