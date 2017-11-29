using Microsoft.Bot.Connector.DirectLine;
using System.Collections.Generic;
using System.Threading.Tasks;
using OITChatSupport.Application.Dtos;

namespace OITChatSupport.Infrastructure.Data.Repositories
{
    public interface IDirectLineThreadRepository
    {
        Task<DirectLineSessionDto> GetByIdAsync(string conversationId);
        Task AddAsync(Conversation conversation);
        Task<IList<DirectLineSessionDto>> GetActive();
    }
}
