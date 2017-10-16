using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Data.Context;
using Web.Dtos;
using Web.Models;

namespace Web.Repositories
{
    public class LiveRequestRepository: ILiveRequestRepository
    {
        private readonly OitChatSupportContext _oitChatSupportContext;

        public LiveRequestRepository(OitChatSupportContext oitChatSupportContext)
        {
            _oitChatSupportContext = oitChatSupportContext;
        }

        public async Task Create(LiveTransferDto liveRequest)
        {
            var request = new LiveRequest
            {
                ConversationId = liveRequest.ConversationId,
                BotHandle = liveRequest.BotHandle,
                RequestTime = DateTime.UtcNow
            };

            try
            {
                _oitChatSupportContext.LiveRequests.Add(request);
                await _oitChatSupportContext
                    .SaveChangesAsync();
            }
            catch(DbUpdateException saveException)
            {
                throw saveException;
            }

        }

        public async Task Update(LiveTransferDto liveSupport)
        {
            var selectedRequest = await _oitChatSupportContext
                .LiveRequests
                .FirstOrDefaultAsync(live => live.ConversationId == liveSupport.ConversationId);

            if (selectedRequest != null)
            {
                selectedRequest.AgentId = liveSupport.User;
                selectedRequest.AcceptTime = DateTime.UtcNow;
                try
                {
                    _oitChatSupportContext.LiveRequests.Update(selectedRequest);
                    await _oitChatSupportContext.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException concurrenyException)
                {
                    throw concurrenyException;
                }
                catch (DbUpdateException updateException)
                {
                    throw updateException;
                }
            }
        }

        public async Task<IList<LiveTransferDto>> GetPending(string botHandle)
        {
           
            var pending = await _oitChatSupportContext
                .LiveRequests
                .Where(request => request.RequestTime 
                == DateTime.UtcNow.Date && request.AgentId 
                == null && request.BotHandle == botHandle)
                .Select(request => new LiveTransferDto
                {
                    ConversationId = request.ConversationId,
                    BotHandle = request.BotHandle,
                    User = "student",
                    TimeRequested = request.RequestTime
                }).ToListAsync();

            return pending;
        }

    }
}
