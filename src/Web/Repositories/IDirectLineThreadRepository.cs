using Microsoft.Bot.Connector.DirectLine;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Repositories
{
    public interface IDirectLineThreadRepository
    {
        Task<DirectLineSessionDto> GetByIdAsync(string conversationId);
        Task AddAsync(Conversation conversation, string botHandle);
        Task<IList<DirectLineSessionDto>> GetActive();
    }
}
