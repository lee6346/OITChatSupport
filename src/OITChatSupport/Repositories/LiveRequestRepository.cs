using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OITChatSupport.Dtos;
using OITChatSupport.Infrastructure.Data.Sql;
using OITChatSupport.Domain.LiveAgentSupport;

namespace OITChatSupport.Repositories
{
    public class LiveRequestRepository: ILiveRequestRepository
    {
        private readonly OitChatSupportContext _oitChatSupportContext;

        public LiveRequestRepository(OitChatSupportContext oitChatSupportContext)
        {
            _oitChatSupportContext = oitChatSupportContext;
        }

        public async Task<bool> Create(LiveTransferDto liveRequest)
        {
            var duplicate = await _oitChatSupportContext.LiveRequests
                .FirstOrDefaultAsync(req => req.ConversationId == liveRequest.ConversationId);
            if (duplicate != null)
                return false;
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
                liveRequest.TimeRequested = request.RequestTime;
                return true;
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

        public async Task<IList<LiveTransferDto>> GetPending()
        {
           
            var pending = await _oitChatSupportContext
                .LiveRequests
                .Where(request => request.AgentId 
                == null)
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
