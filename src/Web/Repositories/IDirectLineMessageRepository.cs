using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Models;

namespace Web.Repositories
{
    public interface IDirectLineMessageRepository
    {
        Task AddAsync(DirectLineMessage directLineMessage);
        Task UpdateAsync(DirectLineMessage directLineMessage);
        Task RemoveAsync(DirectLineMessage directLineMessage);
        Task<IList<DirectLineMessage>> GetAllFromDateAsync(DateTime startDate);
        Task<IList<DirectLineMessage>> GetMessagesByConversationAsync(string conversationId);
        Task<IList<DirectLineMessage>> GetMessagesByAgentAsync(string utsaId);
        Task<IList<DirectLineMessage>> GetMessagesByAgentAsync(string utsaId, DateTime? start);
        Task<IList<DirectLineMessage>> GetMessagesByBotAsync(string botHandle);
        Task<IList<DirectLineMessage>> GetMessagesByBotAsync(string botHandle, DateTime? start);


    }
}
