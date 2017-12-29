using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;

namespace OITChatBotSupport.Infrastructure.Data.InMemory
{
    public class ConnectedAgentTracker : IConnectedAgentTracker
    {
        private object _lock = new object();
        public ConcurrentDictionary<string, ConnectedAgent> connectedAgents = new ConcurrentDictionary<string, ConnectedAgent>();

        public ConnectedAgentTracker() { }

        public List<ConnectedAgent> GetAgents()
        {
            return connectedAgents.Select(item => item.Value).ToList();
        }

        public int ConnectedCount()
        {
            return connectedAgents.Skip(0).Count();
        }

        public int GetShortestWait()
        {
            return connectedAgents.Select(item => item.Value.CurrentSessions).Min();
        }

        public int GetAverageWait()
        {
            if (ConnectedCount() == 0)
                return 0;
            return connectedAgents.Select(item => item.Value.CurrentSessions).Sum()/ConnectedCount();
        }
        
        public bool AgentsUnavailable()
        {
            return connectedAgents.IsEmpty;
        }

        public void UpdateSessionCount(string agentId, int countChange)
        {
            if(connectedAgents.TryGetValue(agentId, out var agent))
            {
                agent.CurrentSessions += countChange;
                connectedAgents[agentId] = agent;
            }
        }
        public ConnectedAgent Remove(string connectionId)
        {
            ConnectedAgent agent = null;
            lock (_lock)
            {
                connectedAgents.TryRemove(connectionId, out agent);
            }
            return agent;
        }

        public bool Add(string connectionId, string agentId)
        {
            lock (_lock)
            {
                return connectedAgents.TryAdd(connectionId, new ConnectedAgent(agentId));
            }
        }
    }
}
