using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Repositories
{
    public interface ILiveRequestRepository
    {
        Task<string> Create(LiveTransferDto liveRequest);
        Task Update(SupportTransferDto liveSupport);
        Task<IList<LiveTransferDto>> GetPending(string department);

    }
}
