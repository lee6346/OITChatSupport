using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Models;

namespace Web.Repositories
{
    public interface IDirectLineMessageRepository
    {
        Task AddAsync(DirectLineMessage directLineMessage);
        Task<IList<DirectLineMessage>> GetConversationLogAsync(string conversationId);
        Task<IList<DirectLineMessage>> GetAgentLogAsync(string utsaId);
    }
}
