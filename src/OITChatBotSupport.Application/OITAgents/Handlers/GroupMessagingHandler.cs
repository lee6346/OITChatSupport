using MediatR;
using OITChatBotSupport.Application.OITAgents.Commands;
using OITChatBotSupport.Application.OITAgents.Dtos;
using OITChatBotSupport.Application.OITAgents.Events;
using OITChatBotSupport.Domain.AgentSupport;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OITChatBotSupport.Application.OITAgents.Handlers
{
    public class GroupMessagingHandler: INotificationHandler<GroupMessageSent>, IRequestHandler<GetGroupMessages, List<GroupMessageDto>>
    {
        private readonly IGroupMessageRepository _groupMessageRepository;
        
        public GroupMessagingHandler(IGroupMessageRepository groupMessageRepository)
        {
            _groupMessageRepository = groupMessageRepository;
        }

        public async Task Handle(GroupMessageSent notification, CancellationToken ct)
        {
            await _groupMessageRepository.AddGroupMessageAsync(new GroupMessage(notification.Message.From, notification.Message.Text, notification.Message.Timestamp));
        }

        public async Task<List<GroupMessageDto>> Handle(GetGroupMessages command, CancellationToken ct)
        {
            var results = await _groupMessageRepository.GetGroupMessagesAsync();
            return results.Select(message => new GroupMessageDto
            {
                From = message.From,
                Text = message.Text,
                Timestamp = message.Timestamp
            }).ToList();
        }
    }
}
