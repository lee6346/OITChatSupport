using Domain.Model;
using Domain.Model.Common;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Domain.Repositories
{
    public interface IDirectLineMessageRepository
    {
        Task<DirectLineMessage> GetByIdAsync(long id);
        Task AddAsync(DirectLineMessage directLineMessage);
        Task UpdateAsync(DirectLineMessage directLineMessage);
        Task RemoveAsync(DirectLineMessage directLineMessage);
        Task<IEnumerable<DirectLineMessage>> GetAllFromDateAsync(DateTime startDate, int numDays);
        Task<IEnumerable<DirectLineMessage>> GetMessagesByConversationAsync(string conversationId);
        Task<IEnumerable<DirectLineMessage>> GetMessagesByConversationAsync(string conversationId, ChatParticipant? chatParticipant);
        Task<IEnumerable<DirectLineMessage>> GetMessagesByAgentAsync(string utsaId);
        Task<IEnumerable<DirectLineMessage>> GetMessagesByAgentAsync(string utsaId, ChatParticipant? chatParticipant);
        Task<IEnumerable<DirectLineMessage>> GetMessagesByAgentAsync(string utsaId, ChatParticipant? chatParticipant, DateTime? start, int numDays);
        Task<IEnumerable<DirectLineMessage>> GetMessagesByBotAsync(string botHandle);
        Task<IEnumerable<DirectLineMessage>> GetMessagesByBotAsync(string botHandle, ChatParticipant? chatParticipant);
        Task<IEnumerable<DirectLineMessage>> GetMessagesByBotAsync(string botHandle, ChatParticipant? chatParticipant, DateTime? start, int numDays);


    }
}
