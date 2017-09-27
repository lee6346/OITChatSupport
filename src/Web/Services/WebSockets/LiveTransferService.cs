using OITChatSupport.Web.Dtos;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.WebSockets
{
    public class LiveTransferService: ILiveTransferService
    {
        //private readonly ConcurrentDictionary<>

        //public LiveTransferService()
        public async Task RequestLiveAgentAsync(LiveTransferDto liveTransferDto)
        {
        }
        public async Task RemovePendingRequestAsync(LiveTransferDto liveTransferDto)
        {

        }


    }
}
