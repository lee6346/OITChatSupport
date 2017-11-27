using System.Collections.Generic;
using System.Threading.Tasks;
using OITChatSupport.Dtos;

namespace OITChatSupport.Repositories
{
    public interface ILiveRequestRepository
    {
        Task<bool> Create(LiveTransferDto liveRequest);
        Task Update(LiveTransferDto liveSupport);
        Task<IList<LiveTransferDto>> GetPending();

    }
}
