using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrintSpotBot.Services
{
    public interface ILocationDistanceService
    {
        double GetDistance(string location);
    }
}
