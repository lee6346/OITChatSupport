using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Services.Hubs
{
    public class PresenceHubLifetimeManager<THub, THubLifetimeManager>: HubLifetimeManager<THub>, IDisposable
        where THubLifetimeManager : HubLifetimeManager<THub>
        where THub : AgentHubWithPresence
    {
        private readonly HubConnectionList _connections = new HubConnectionList();
        private readonly IAgentTracker<THub> _agentTracker;
        private readonly HubLifetimeManager<THub> _wrappedHubLifetimeManager;
        private readonly IServiceProvider _serviceProvider;
        private readonly IServiceScopeFactory _serviceScopeFactory;
        private IHubContext<THub> _hubContext;

        

        public PresenceHubLifetimeManager(IAgentTracker<THub> agentTracker, IServiceProvider serviceProvider, IServiceScopeFactory serviceScopeFactory)
        {
            _agentTracker = agentTracker;
            _agentTracker.AgentsJoined += OnAgentsJoined;
            _agentTracker.AgentsLeft -= OnAgentsLeft;

            _serviceProvider = serviceProvider;
            _serviceScopeFactory = serviceScopeFactory;
            _wrappedHubLifetimeManager = serviceProvider.GetRequiredService<THubLifetimeManager>();


        }

        public override async Task OnConnectedAsync(HubConnectionContext connection)
        {
            await _wrappedHubLifetimeManager.OnConnectedAsync(connection);
            _connections.Add(connection);
            await _agentTracker.AddAgent(connection, new AgentDto { AgentId = connection.User.Identity.Name, Connected = true, UtsaDepartment = "AskRowdy" });
        }

        public override async Task OnDisconnectedAsync(HubConnectionContext connection)
        {
            await _wrappedHubLifetimeManager.OnDisconnectedAsync(connection);
            _connections.Remove(connection);
            await _agentTracker.RemoveAgent(connection);
        }

        private async void OnAgentsJoined(AgentDto[] agents)
        {
            await Notify(hub =>
            {
                if (agents.Length == 1)
                {
                    if (agents[0].AgentId != hub.Context.User.Identity.Name)
                    {
                        return hub.OnAgentsJoined(agents);
                    }
                }
                else
                {
                    return hub.OnAgentsJoined(agents.Where(a => a.AgentId != hub.Context.User.Identity.Name).ToArray());
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
            foreach(var connection in _connections)
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
                    catch(Exception e)
                    {
                        throw e;
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
