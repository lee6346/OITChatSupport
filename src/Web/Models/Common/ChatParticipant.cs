using System;

namespace Web.Models.Common
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
