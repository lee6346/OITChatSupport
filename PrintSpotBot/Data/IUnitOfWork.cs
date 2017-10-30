using PrintSpotBot.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PrintSpotBot.Data
{
    public interface IUnitOfWork
    {
        IActivityRepository ActivityRepository { get; }
        IAgentRepository AgentRepository { get; }
    }
}