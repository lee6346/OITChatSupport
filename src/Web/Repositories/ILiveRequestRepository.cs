using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Repositories
{
    public interface ILiveRequestRepository
    {
        Task Create(LiveTransferDto liveRequest);
        Task Update(LiveTransferDto liveSupport);
        Task<IList<LiveTransferDto>> GetPending(string botHandle);

    }
}
