using FluentValidation;
using OITChatBotSupport.Application.OITAgents.Events;

namespace OITChatBotSupport.Application.OITAgents.Validators
{
    public class GroupMessageSentValidator: AbstractValidator<GroupMessageSent>
    {
        public GroupMessageSentValidator()
        {
            RuleFor(message => message.Message.Text).NotNull().NotEmpty();
        }
    }
}
