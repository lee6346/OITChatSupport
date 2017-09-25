using Microsoft.AspNetCore.SignalR;
using OITChatSupport.Web.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OITChatSupportWeb.Web.Services.RealTime
{
    public interface IPendingRequestTracker<out THub>
    {
        Task<IEnumerable<LiveTransferDto>> PendingRequests();
        Task<IEnumerable<LiveTransferDto>> PendingRequests(string department);
        Task MakeRequest(HubConnectionContext connection, LiveTransferDto agentDto);
        Task RemoveRequest(HubConnectionContext connection);

        event Action<LiveTransferDto[]> RequestsMade;
        event Action<LiveTransferDto[]> RequestsDropped;
    }
}
