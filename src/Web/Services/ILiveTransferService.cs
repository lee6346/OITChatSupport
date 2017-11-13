using Web.Dtos;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Web.Services
{
    public interface ILiveTransferService
    {
        Task<bool> RequestLiveAgentAsync(LiveTransferDto liveTransferDto);
        Task AcceptPendingRequestAsync(LiveTransferDto liveSupport);
        Task<IList<LiveTransferDto>> GetPendingRequestsAsync(string group);
    }
}
