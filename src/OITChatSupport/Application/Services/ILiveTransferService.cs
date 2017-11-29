using System.Threading.Tasks;
using System.Collections.Generic;
using OITChatSupport.Application.Dtos;

namespace OITChatSupport.Application.Services
{
    public interface ILiveTransferService
    {
        Task<bool> RequestLiveAgentAsync(LiveTransferDto liveTransferDto);
        Task AcceptPendingRequestAsync(LiveTransferDto liveSupport);
        Task<IList<LiveTransferDto>> GetPendingRequestsAsync();
    }
}
