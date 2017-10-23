﻿using System;
using System.Threading.Tasks;
using Web.Dtos;
using System.Linq;
using Microsoft.AspNetCore.SignalR;
using System.Collections;
using System.Collections.Generic;

namespace Web.Services.Hubs
{
    public class AgentHub: Hub
    {

        private readonly IAgentHubTracker _agentHubTracker;
        public AgentHub(IAgentHubTracker agentHubTracker)
        {
            _agentHubTracker = agentHubTracker;
        }

        public override Task OnConnectedAsync()
        {
            
            return base.OnConnectedAsync();
        }

        public async override Task OnDisconnectedAsync(Exception exception)
        {
            await _agentHubTracker.RemoveAgent(Context.ConnectionId);
            await base.OnDisconnectedAsync(exception);
        }

        public async Task JoinGroup(AgentDto agent)
        {
            await _agentHubTracker.AddAgent(Context.ConnectionId, agent);
        }
        public async Task LeaveGroup()
        {
            await _agentHubTracker.RemoveAgent(Context.ConnectionId);
        }

        public async Task LiveTransfer(LiveTransferDto liveTransferDto)
        {
            await Clients.Group(liveTransferDto.BotHandle).InvokeAsync("LiveTransfer", liveTransferDto);
        }

        public async Task RemoveTransferRequest(LiveTransferDto liveTransferDto)
        {
            await Clients.Group(liveTransferDto.BotHandle).InvokeAsync("RemoveTransferRequest", liveTransferDto);
        }

        public async Task Send(GroupMessageDto agentGroupMessage)
        {
            await Clients.Group(agentGroupMessage.Group).InvokeAsync("Send", agentGroupMessage);
        }

    }
}
