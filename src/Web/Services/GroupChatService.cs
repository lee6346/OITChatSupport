using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Dtos;
using Web.Repositories;
using Web.Services.Hubs;

namespace Web.Services
{
    public class GroupChatService: IGroupChatService
    {
        private readonly IHubContext<AgentHub> _hubContext;
        private readonly IAgentChatRepository _agentChatRepository;

        public GroupChatService(IHubContext<AgentHub> hubContext, IAgentChatRepository agentChatRepository)
        {
            _agentChatRepository = agentChatRepository;
            _hubContext = hubContext;
        }

        public async Task<IList<GroupMessageDto>> GetCurrentChatLog(string group)
        {
            var messages = await _agentChatRepository.GetMessages(group);
            return messages;
        }

        public async Task SendMessage(GroupMessageDto message)
        {
            await _agentChatRepository.AddMessage(message);
            await _hubContext.Clients.Group(message.Group).InvokeAsync("Send", message);
        }

        public Task StartThread()
        {
            return Task.CompletedTask;
        }

        public Task JoinThread()
        {
            return Task.CompletedTask;
        }
    }
}
