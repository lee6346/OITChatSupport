using Web.Dtos;
using System.Threading.Tasks;

namespace Web.Services
{
    public interface ILiveTransferService
    {
        Task RequestLiveAgentAsync(LiveTransferRequestDto liveTransferDto);
        Task RemovePendingRequestAsync(LiveTransferRequestDto liveTransferDto);

    }
}
