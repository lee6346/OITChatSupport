using System.Collections.Generic;

namespace OITChatBotSupport.Infrastructure.Data.InMemory
{
    public interface IConnectedAgentTracker
    {
        List<ConnectedAgent> GetAgents();
        int GetShortestWait();
        int GetAverageWait();
        void UpdateSessionCount(string agentId, int countChange);
        ConnectedAgent Remove(string connectionId);
        bool Add(string connectionId, string agentId);
        int ConnectedCount();
    }
}
