using System.Collections.Generic;
using System.Threading.Tasks;

namespace OITChatBotSupport.Domain.AgentSupport
{
    public interface IGroupMessageRepository
    {
        Task AddGroupMessageAsync(GroupMessage message);
        Task<IEnumerable<GroupMessage>> GetGroupMessagesAsync();
    }
}
