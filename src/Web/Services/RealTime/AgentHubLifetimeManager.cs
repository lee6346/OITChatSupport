using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.DependencyInjection;
using Web.Dtos;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.RealTime
{

    public class DefaultAgentHubLifetimeManager<THub>: AgentHubLifetimeManager<THub, DefaultHubLifetimeManager<THub>>
        where THub: HubWithPresence
    {
        public DefaultAgentHubLifetimeManager(IAgentTracker<THub> agentTracker, IServiceScopeFactory serviceScopeFactory,
            ILogger logger, IServiceProvider serviceProvider) : base(agentTracker, serviceScopeFactory, logger, serviceProvider) { }
    }


    public class AgentHubLifetimeManager<THub, THubLifetimeManager> : HubLifetimeManager<THub>, IDisposable
        where THubLifetimeManager : HubLifetimeManager<THub>
        where THub: HubWithPresence
    {
        private readonly HubConnectionList _agentConnections = new HubConnectionList();
        private readonly IAgentTracker<THub> _agentTracker;
        private readonly IServiceScopeFactory _serviceScopeFactory;
        private readonly ILogger _logger;
        private readonly IServiceProvider _serviceProvider;
        private readonly HubLifetimeManager<THub> _wrappedHubLifetimeManager;
        private IHubContext<THub> _hubContext;

        public AgentHubLifetimeManager(IAgentTracker<THub> agentTracker, IServiceScopeFactory serviceScopeFactory, 
            ILogger logger, IServiceProvider serviceProvider)
        {
            _agentTracker = agentTracker;
            _agentTracker.AgentsJoined += OnAgentsJoined;
            _agentTracker.AgentsLeft += OnAgentsLeft;

            _serviceScopeFactory = serviceScopeFactory;
            _serviceProvider = serviceProvider;
            _logger = logger;
            _wrappedHubLifetimeManager = serviceProvider.GetRequiredService<THubLifetimeManager>();
        }

        public override async Task OnConnectedAsync(HubConnectionContext connection)
        {
            await _wrappedHubLifetimeManager.OnConnectedAsync(connection);
            _agentConnections.Add(connection);
            await _agentTracker.AddAgent(connection, new AgentDto { });
        }


        public override async Task OnDisconnectedAsync(HubConnectionContext connection)
        {
            await _wrappedHubLifetimeManager.OnDisconnectedAsync(connection);
            _agentConnections.Remove(connection);
            await _agentTracker.RemoveAgent(connection);
        }

        private async void OnAgentsJoined(AgentDto[] agents)
        {
            await Notify(hub =>
            {
                if (agents.Length == 1)
                {
                    if (agents[0].ConnectionId != hub.Context.ConnectionId)
                    {
                        return hub.OnAgentsJoined(agents);
                    }
                }
                else
                {
                    return hub.OnAgentsJoined(agents.Where(u => u.ConnectionId != hub.Context.Connection.ConnectionId).ToArray());
                }
                return Task.CompletedTask;
            });
        }

        private async void OnAgentsLeft(AgentDto[] agents)
        {
            await Notify(hub => hub.OnAgentsLeft(agents));
        }

        private async Task Notify(Func<THub, Task> invocation)
        {
            foreach(var connection in _agentConnections)
            {
                using(var scope = _serviceScopeFactory.CreateScope())
                {
                    var hubActivator = scope.ServiceProvider.GetRequiredService<IHubActivator<THub>>();
                    var hub = hubActivator.Create();

                    if(_hubContext == null)
                    {
                        _hubContext = _serviceProvider.GetRequiredService<IHubContext<THub>>();
                    }

                    hub.Clients = _hubContext.Clients;
                    hub.Context = new HubCallerContext(connection);
                    hub.Groups = _hubContext.Groups;

                    try
                    {
                        await invocation(hub);
                    }
                    catch(Exception ex)
                    {
                        throw ex;
                    }
                    finally
                    {
                        hubActivator.Release(hub);
                    }

                }
            }
        }

        public void Dispose()
        {
            _agentTracker.AgentsJoined -= OnAgentsJoined;
            _agentTracker.AgentsLeft -= OnAgentsLeft;
        }

        public override Task InvokeAllAsync(string methodName, object[] args)
        {
            return _wrappedHubLifetimeManager.InvokeAllAsync(methodName, args);
        }

        public override Task InvokeAllExceptAsync(string methodName, object[] args, IReadOnlyList<string> excludedIds)
        {
            return _wrappedHubLifetimeManager.InvokeAllExceptAsync(methodName, args, excludedIds);
        }

        public override Task InvokeConnectionAsync(string connectionId, string methodName, object[] args)
        {
            return _wrappedHubLifetimeManager.InvokeConnectionAsync(connectionId, methodName, args);
        }

        public override Task InvokeGroupAsync(string groupName, string methodName, object[] args)
        {
            return _wrappedHubLifetimeManager.InvokeGroupAsync(groupName, methodName, args);
        }


        public override Task InvokeUserAsync(string userId, string methodName, object[] args)
        {
            return _wrappedHubLifetimeManager.InvokeUserAsync(userId, methodName, args);
        }

        public override Task AddGroupAsync(string connectionId, string groupName)
        {
            return _wrappedHubLifetimeManager.AddGroupAsync(connectionId, groupName);
        }

        public override Task RemoveGroupAsync(string connnectionId, string groupName)
        {
             return _wrappedHubLifetimeManager.RemoveGroupAsync(connnectionId, groupName);
        }
    }
}
