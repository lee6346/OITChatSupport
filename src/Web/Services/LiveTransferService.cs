using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Dtos;
using Web.Models;
using Web.Repositories;
using Web.Services.Hubs;

namespace Web.Services
{
    public class LiveTransferService : ILiveTransferService
    {
        private readonly ILiveRequestRepository _liveRequestRepository;
        private readonly IAgentHubTracker _hubTracker;

        public LiveTransferService(ILiveRequestRepository liveRequestRepository, IAgentHubTracker hubTracker)
        {

            _liveRequestRepository = liveRequestRepository;
            _hubTracker = hubTracker;

        }

        public async Task RequestLiveAgentAsync(LiveTransferDto liveTransferDto)
        {
            var available = (_hubTracker.AgentsOnline(liveTransferDto.BotHandle).Result.Count() > 0);
            if(available)
            {
                var group = await _liveRequestRepository.Create(liveTransferDto);
                await _hubTracker.InvokeLiveRequest(group, liveTransferDto);
            }
            
        }

        public async Task AcceptPendingRequestAsync(SupportTransferDto support)
        {
            await _liveRequestRepository.Update(support);
            await _hubTracker.InvokeLiveSupport(support.Department, support);
        }


        public async Task<IList<LiveTransferDto>> GetPendingRequestsAsync(AgentDto agent)
        {
            return await _liveRequestRepository.GetPending(agent.BotHandle);
        }



    }
}
