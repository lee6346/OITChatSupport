using Web.Dtos;
using System.Threading.Tasks;

namespace Web.Services
{
    public interface ILiveTransferService
    {
        Task RequestLiveAgentAsync(LiveTransferDto liveTransferDto);
        Task RemovePendingRequestAsync(LiveTransferDto liveTransferDto);

    }
}
