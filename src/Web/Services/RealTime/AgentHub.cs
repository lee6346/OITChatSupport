using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.SignalR;
using OITChatSupport.Web.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.RealTime
{
    /// <summary>
    /// 
    /// 
    /// 
    /// 
    /// </summary>
    public class AgentHub: HubWithPresence
    {

        public AgentHub(IAgentTracker<AgentHub> agentTracker) : base(agentTracker) { }

        public override async Task OnConnectedAsync()
        {
            await Clients.Client(Context.ConnectionId).InvokeAsync("SetUsersOnline", await GetAgentsOnline(null));
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await base.OnDisconnectedAsync(exception);
        }

        public override Task OnAgentsJoined(AgentDto[] agents)
        {
            return base.OnAgentsJoined(agents);
        }

        public override Task OnAgentsLeft(AgentDto[] agents)
        {
            return base.OnAgentsLeft(agents);
        }

        /*
        public async Task SendLiveRequestAsync(LiveTransferDto liveTransferDto)
        {
            
            await Clients.Group(liveTransferDto.Department).InvokeAsync("SendLiveRequest", liveTransferDto);
        }

        public async Task SendRemoveRequestAsync(LiveTransferDto liveTransferDto)
        {
            await Clients.Group(liveTransferDto.Department).InvokeAsync("SendRemoveRequest", liveTransferDto);
        }

        public async Task SendGroupMessageAsync(AgentGroupMessageDto agentGroupMessageDto)
        {
            await Clients.Group(agentGroupMessageDto.Department).InvokeAsync("SendGroupMessage", agentGroupMessageDto);
        }
        //this needs authorization, only for admin/developers when parts of the app go down?
        public async Task BroadCastErrorMessageAsync(AgentGroupMessageDto agentGroupMessageDto)
        {
            await Clients.All.InvokeAsync("ServerError", agentGroupMessageDto);
        }
        */

        public Task SendAgentMessage(AgentMessageDto agentMessageDto)
        {
            return Task.CompletedTask;
        }

        public async Task JoinGroup(AgentDto agentDto)
        {
            await Groups.AddAsync(Context.ConnectionId, agentDto.Department.ToString());
            await Clients.Group(agentDto.Department.ToString()).InvokeAsync("JoinGroup", agentDto);
        }

        public async Task LeaveGroup(AgentDto agentDto)
        {
            await Clients.Group(agentDto.Department.ToString()).InvokeAsync("LeaveGroup", agentDto);
            await Groups.RemoveAsync(Context.ConnectionId, agentDto.Department.ToString());
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
