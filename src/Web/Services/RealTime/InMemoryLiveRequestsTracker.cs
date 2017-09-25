using Microsoft.AspNetCore.SignalR;
using OITChatSupport.Web.Dtos;
using OITChatSupportWeb.Web.Services.Errors;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OITChatSupportWeb.Web.Services.RealTime
{
    public class InMemoryLiveRequestsTracker<THub>: IPendingRequestTracker<THub>
    {
        private readonly ConcurrentDictionary<HubConnectionContext, LiveTransferDto> _pendingRequests = new ConcurrentDictionary<HubConnectionContext, LiveTransferDto>();
        public event Action<LiveTransferDto[]> RequestsMade;
        public event Action<LiveTransferDto[]> RequestsDropped;

        public Task<IEnumerable<LiveTransferDto>> PendingRequests()
        {
            return PendingRequests(null);
        }

        public Task<IEnumerable<LiveTransferDto>> PendingRequests(string department)
        {
            if (department == null)
            {
                return Task.FromResult(_pendingRequests.Values.AsEnumerable());
            }
            return Task.FromResult(_pendingRequests.Values.Where(s => s.Department.ToString() == department));
        }

        public Task MakeRequest(HubConnectionContext connection, LiveTransferDto liveTransferDto)
        {
            if (!_pendingRequests.TryAdd(connection, liveTransferDto))
                throw new InMemoryCacheException("Failed to add agents to the in-memory cache");
            RequestsMade(new[] { liveTransferDto });
            return Task.CompletedTask;

        }
        public Task RemoveRequest(HubConnectionContext connection)
        {
            if (_pendingRequests.TryRemove(connection, out var liveTransferDto))
            {
                RequestsDropped(new[] { liveTransferDto });
                return Task.CompletedTask;
            }
            else
            {
                
                throw new InMemoryCacheException("Failed to remove agent from the in-memory cache");
            }
        }


        public int Count()
        {
            return Count(null);
        }

        public int Count(string department)
        {
            if (department == null)
            {
                return _pendingRequests.Values.Count;
            }
            return _pendingRequests.Values.Where(s => s.Department.ToString() == department).Count();
        }
    }
}
