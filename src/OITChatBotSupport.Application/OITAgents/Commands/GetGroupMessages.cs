using MediatR;
using OITChatBotSupport.Application.OITAgents.Dtos;
using System.Collections.Generic;

namespace OITChatBotSupport.Application.OITAgents.Commands
{
    public class GetGroupMessages: IRequest<List<GroupMessageDto>>
    {
    }
}
