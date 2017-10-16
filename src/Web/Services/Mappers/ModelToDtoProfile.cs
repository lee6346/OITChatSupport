using AutoMapper;
using Web.Dtos;
using Web.Models;

namespace Web.Services.Mappers
{
    public class ModelToDtoProfile: Profile
    {
        public ModelToDtoProfile()
        {
            CreateMap<LiveRequest, LiveTransferDto>()
                .ConstructUsing(c => new LiveTransferDto { BotHandle = c.BotHandle, ConversationId = c.ConversationId, TimeRequested = c.RequestTime });
            CreateMap<Agent, AgentDto>()
                .ConstructUsing(c => new AgentDto { AgentId = c.UtsaId, UtsaDepartment = c.UtsaDepartment, Connected = c.Connected });
        }
    }
}
