using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OITChatSupport.Infrastructure.Data.Repositories;
using OITChatSupport.Application.RealTimeRPC;
using OITChatSupport.Application.Dtos;

namespace OITChatSupport.Application.Services
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

        public async Task<bool> RequestLiveAgentAsync(LiveTransferDto liveTransferDto)
        {
            var available = (_hubTracker.AgentsOnline().Result.Count() > 0);
            if(available)
            {
                if(await _liveRequestRepository.Create(liveTransferDto))
                    await _hubTracker.InvokeLiveRequest(liveTransferDto);
            }
            return available;
            
        }

        public async Task AcceptPendingRequestAsync(LiveTransferDto liveSupport)
        {
            await _liveRequestRepository.Update(liveSupport);
            await _hubTracker.InvokeLiveSupport(liveSupport);
        }


        public async Task<IList<LiveTransferDto>> GetPendingRequestsAsync()
        {
            return await _liveRequestRepository.GetPending();
        }



    }
}
