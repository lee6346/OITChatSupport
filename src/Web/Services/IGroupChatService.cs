using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Dtos;

namespace Web.Services
{
    public interface IGroupChatService
    {
        Task SendMessage(GroupMessageDto groupMessage);
        Task<IList<GroupMessageDto>> GetCurrentChatLog(string group);
        Task StartThread();
        Task JoinThread();
    }
}
