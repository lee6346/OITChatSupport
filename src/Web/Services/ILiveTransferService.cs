﻿using OITChatSupport.Web.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services
{
    public interface ILiveTransferService
    {
        Task RequestLiveAgentAsync(LiveTransferDto liveTransferDto);
        Task RemovePendingRequestAsync(LiveTransferDto liveTransferDto);

    }
}