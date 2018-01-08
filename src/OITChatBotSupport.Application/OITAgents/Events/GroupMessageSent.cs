using MediatR;
using OITChatBotSupport.Application.OITAgents.Dtos;

namespace OITChatBotSupport.Application.OITAgents.Events
{
    public class GroupMessageSent: INotification
    {
        public GroupMessageSent(GroupMessageDto message)
        {
            Message = message;
        }
        public GroupMessageDto Message { get; set; }
    }
}
