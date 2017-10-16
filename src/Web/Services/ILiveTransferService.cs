using Web.Dtos;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Web.Services
{
    public interface ILiveTransferService
    {
        Task RequestLiveAgentAsync(LiveTransferDto liveTransferDto);
        Task AcceptPendingRequestAsync(SupportTransferDto support);
        Task<IList<LiveTransferDto>> GetPendingRequestsAsync(AgentDto agent);
    }
}
