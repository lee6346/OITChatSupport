using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Dtos;
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
                await _liveRequestRepository.Create(liveTransferDto);
                await _hubTracker.InvokeLiveRequest(liveTransferDto);
            }
            
        }

        public async Task AcceptPendingRequestAsync(LiveTransferDto liveSupport)
        {
            await _liveRequestRepository.Update(liveSupport);
            await _hubTracker.InvokeLiveSupport(liveSupport);
        }


        public async Task<IList<LiveTransferDto>> GetPendingRequestsAsync(string group)
        {
            return await _liveRequestRepository.GetPending(group);
        }



    }
}
