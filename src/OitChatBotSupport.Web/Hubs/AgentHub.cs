using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using MediatR;
using OITChatBotSupport.Application.OITAgents.Events;
using OITChatBotSupport.Infrastructure.Data.InMemory;
using OITChatBotSupport.Application.OITAgents.Dtos;

namespace OITChatBotSupport.Web.Hubs
{
    public class AgentHub: Hub
    {
        private readonly IMediator _mediator;
        private readonly IConnectedAgentTracker _connectedAgents;

        public AgentHub(IMediator mediator, IConnectedAgentTracker connectedAgents) 
        {
            _mediator = mediator;
            _connectedAgents = connectedAgents;
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

        public async Task SendMessage(GroupMessageDto message)
        {
            await Clients.Group("UTSA").InvokeAsync("SendMessage", message);
            await _mediator.Publish(new GroupMessageSent(message));
        }
    }
}
