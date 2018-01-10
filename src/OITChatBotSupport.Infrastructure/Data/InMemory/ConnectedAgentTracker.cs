using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;

namespace OITChatBotSupport.Infrastructure.Data.InMemory
{
    /// <summary>
    /// Track connected agents subscribing to  and their current chat session count
    /// </summary>
    public class ConnectedAgentTracker : IConnectedAgentTracker
    {
        /// <summary>
        /// Used for thread synchronization to prevent reads while updates to the dictionary are being made
        /// </summary>
        private object _lock = new object();

        /// <summary>
        /// Dictionary to store connected agent information, using the socket connection ID as key
        /// </summary>
        public ConcurrentDictionary<string, ConnectedAgent> connectedAgents = new ConcurrentDictionary<string, ConnectedAgent>();

        /// <summary>
        /// Retrieve all connected agents
        /// </summary>
        /// <returns>Returns all connected agents in the dictionary as <see cref="List{T}"/></returns>
        public List<ConnectedAgent> GetAgents()
        {
            return connectedAgents.Select(item => item.Value).ToList();
        }

        /// <summary>
        /// Get total connected agents
        /// </summary>
        /// <returns>integer count of connected agents</returns>
        public int ConnectedCount()
        {
            return connectedAgents.Skip(0).Count();
        }

        /// <summary>
        /// Get the smallest current session count from the agents
        /// </summary>
        /// <returns></returns>
        public int GetShortestWait()
        {
            return connectedAgents.Select(item => item.Value.CurrentSessions).Min();
        }

        /// <summary>
        /// Get the average number of current sessions per agent
        /// </summary>
        /// <returns></returns>
        public int GetAverageWait()
        {
            if (ConnectedCount() == 0)
                return 0;
            return connectedAgents.Select(item => item.Value.CurrentSessions).Sum()/ConnectedCount();
        }
        
        /// <summary>
        /// Get agent availability
        /// </summary>
        /// <returns></returns>
        public bool AgentsUnavailable()
        {
            return connectedAgents.IsEmpty;
        }

        /// <summary>
        /// Update agent session count when agent accepts a new transfer request or exists from an existing one
        /// </summary>
        /// <param name="agentId">agent's UTSA Id</param>
        /// <param name="countChange">number of sessions added or removed</param>
        public void UpdateSessionCount(string agentId, int countChange)
        {
            if(connectedAgents.TryGetValue(agentId, out var agent))
            {
                agent.CurrentSessions += countChange;
                connectedAgents[agentId] = agent;
            }
        }

        /// <summary>
        /// Remove an agent from the dictionary when they have unsubscribed or have disconnected from accepting transfer requests
        /// </summary>
        /// <param name="connectionId">agent's current web socket connection ID</param>
        /// <returns>Returns <see cref="ConnectedAgent"/> removed from the dictionary</returns>
        public ConnectedAgent Remove(string connectionId)
        {
            ConnectedAgent agent = null;
            lock (_lock)
            {
                connectedAgents.TryRemove(connectionId, out agent);
            }
            return agent;
        }

        /// <summary>
        /// Add an agent to the dictionary when they have connected and are subscribing to transfer requests
        /// </summary>
        /// <param name="connectionId">agent's current web socket connection ID</param>
        /// <param name="agentId">agent's UTSA ID</param>
        /// <returns>Returns true if agent successfully added to the dictionary</returns>
        public bool Add(string connectionId, string agentId)
        {
            lock (_lock)
            {
                return connectedAgents.TryAdd(connectionId, new ConnectedAgent(agentId));
            }
        }
    }
}
