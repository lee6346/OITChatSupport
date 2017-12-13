using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using MediatR;
using OITChatBotSupport.Infrastructure.Data.InMemory;
using OITChatBotSupport.Application.OITAgents.Events;
using CacheManager.Core;
using CacheManager.Core.Internal;

namespace OITChatBotSupport.Infrastructure.RPC
{
    public class AgentHub: Hub
    {
        private readonly IMediator _mediator;
        private readonly IConnectedAgentTracker _connectedAgents;
        private readonly ICacheManager<PendingRequest> _requests;

        public AgentHub(IMediator mediator, IConnectedAgentTracker connectedAgents, ICacheManager<PendingRequest> requests) 
        {
            _mediator = mediator;
            _connectedAgents = connectedAgents;
            _requests = requests;
            requests.OnRemove += RemoveTransferRequest;
            requests.OnAdd += LiveTransfer;
        }

        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }

        public async override Task OnDisconnectedAsync(Exception exception)
        {
            await LeaveGroup(Context.ConnectionId);
            await base.OnDisconnectedAsync(exception);
        }

        public async Task JoinGroup(HubMember agent)
        {
            if(_connectedAgents.Add(Context.ConnectionId, agent.AgentId))
            {
                await Groups.AddAsync(Context.ConnectionId, "UTSA");
                await Clients.Group("UTSA").InvokeAsync("JoinGroup", agent);
                await _mediator.Publish(new AgentConnected(agent.AgentId));
            }
        }

        public async Task LeaveGroup(string connectionId)
        {
            await Groups.RemoveAsync(connectionId, "UTSA");
            var agent = _connectedAgents.Remove(connectionId);
            
            if (agent != null)
            {
                await Clients.Group("UTSA").InvokeAsync("LeaveGroup", agent);
                await _mediator.Publish(new AgentDisconnected(agent.AgentId));
            }
        }

        public async Task LiveTransfer(PendingRequest request)
        {
            await Clients.Group("UTSA").InvokeAsync("LiveTransfer", request);
        }

        private async void LiveTransfer(object sender, CacheActionEventArgs e)
        {
            var newRequest = _requests.Get(e.Key);
            await Clients.Group("UTSA").InvokeAsync("LiveTransfer", newRequest);
        }

        public async Task RemoveTransferRequest(string conversationId)
        {
            await Clients.Group("UTSA").InvokeAsync("RemoveTransferRequest", new {ConversationId=conversationId});
        }

        private async void RemoveTransferRequest(object sender, CacheActionEventArgs e)
        {
            await Clients.Group("UTSA").InvokeAsync("RemoveTransferRequest", new { ConversationId = e.Key });
        }
    }
}
