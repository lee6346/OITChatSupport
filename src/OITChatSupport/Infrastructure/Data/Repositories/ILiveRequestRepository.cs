using System.Collections.Generic;
using System.Threading.Tasks;
using OITChatSupport.Application.Dtos;

namespace OITChatSupport.Infrastructure.Data.Repositories
{
    public interface ILiveRequestRepository
    {
        Task<bool> Create(LiveTransferDto liveRequest);
        Task Update(LiveTransferDto liveSupport);
        Task<IList<LiveTransferDto>> GetPending();

    }
}
