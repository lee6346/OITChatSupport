using PrintSpotBot.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrintSpotBot.Data.Repositories
{
    public interface IAgentRepository
    {
        Task<List<Agent>> GetConnected();

    }
}
