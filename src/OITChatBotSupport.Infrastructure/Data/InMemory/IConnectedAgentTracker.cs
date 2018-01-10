using System.Collections.Generic;

namespace OITChatBotSupport.Infrastructure.Data.InMemory
{
    /// <summary>
    /// IConnectedAgentTracker is used to track and get information 
    /// of agents connected and subscribing to agent transfer requests
    /// </summary>
    public interface IConnectedAgentTracker
    {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        List<ConnectedAgent> GetAgents();
        int GetShortestWait();
        int GetAverageWait();
        void UpdateSessionCount(string agentId, int countChange);
        ConnectedAgent Remove(string connectionId);
        bool Add(string connectionId, string agentId);
        int ConnectedCount();
    }
}
