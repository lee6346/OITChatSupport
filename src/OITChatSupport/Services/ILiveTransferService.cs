using OITChatSupport.Dtos;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace OITChatSupport.Services
{
    public interface ILiveTransferService
    {
        Task<bool> RequestLiveAgentAsync(LiveTransferDto liveTransferDto);
        Task AcceptPendingRequestAsync(LiveTransferDto liveSupport);
        Task<IList<LiveTransferDto>> GetPendingRequestsAsync();
    }
}
