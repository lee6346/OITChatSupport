using Microsoft.AspNetCore.Authorization;
using System;
using System.Threading.Tasks;
using Web.Services.RealTime;
using Web.Dtos;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.Http.Features;

namespace Web.Services.Hubs
{
    [Authorize]
    public class AgentHub: HubWithPresence
    {
        public AgentHub(IAgentTracker<AgentHub> agentTracker): base(agentTracker)
        {
        }

        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            return base.OnDisconnectedAsync(exception);
        }

        public override Task OnAgentsJoined(AgentDto[] agents)
        {
            return base.OnAgentsJoined(agents);
        }

        public override Task OnAgentsLeft(AgentDto[] agents)
        {
            return base.OnAgentsLeft(agents);
        }

        public async Task JoinGroup(string groupName)
        {
            await Groups.AddAsync(Context.ConnectionId, groupName);
            await Clients.Group(groupName).InvokeAsync("AgentJoined", new AgentGroupMessageDto { });
        }

        public async Task LeaveGroup(string groupName)
        {
            await Groups.RemoveAsync(Context.ConnectionId, groupName);
            await Clients.Group(groupName).InvokeAsync("AgentLeft", new AgentGroupMessageDto { });
        }

        public Task SendLiveNotification(LiveTransferDto liveTransferDto)
        {
            return Clients.Group(liveTransferDto.Department).InvokeAsync("LiveTransfer", liveTransferDto);
        }

        public Task SendGroupMessage(AgentGroupMessageDto agentGroupMessage)
        {
            return Clients.Group(agentGroupMessage.Department).InvokeAsync("GroupMessage", agentGroupMessage);
        }

        public Task BroadcastAgentMessage(AgentGroupMessageDto agentGroupMessage)
        {
            return Clients.All.InvokeAsync("BroadcastMessage", agentGroupMessage);
        }
        public async Task CheckAuthorization(HubCallerContext callerContext)
        {
            var conId = callerContext.ConnectionId;
            var connectionContext = callerContext.Connection;
            IFeatureCollection httpfeatures = connectionContext.Features;
            var httpContext = connectionContext.GetHttpContext();
            var scopedHttpContextItems = httpContext.Items;
            var session = httpContext.Session;



            var policyIdentities = callerContext.User.Identities;
            var primaryPolicyIdentity = callerContext.User.Identity;
            var authType = primaryPolicyIdentity.AuthenticationType;
            var userName = primaryPolicyIdentity.Name;
            var authChecked = primaryPolicyIdentity.IsAuthenticated;

        }

    }
}
