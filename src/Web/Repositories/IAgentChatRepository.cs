using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Repositories
{
    public interface IAgentChatRepository
    {
        Task<IList<GroupMessageDto>> GetMessages(string group);
        Task AddMessage(GroupMessageDto groupMessage);
        Task CreateThread();
        Task UpdateThread();
    }
}
