using FluentValidation;
using OITChatBotSupport.Application.OITAgents.Commands;

namespace OITChatBotSupport.Application.OITAgents
{
    public class AcceptTransferValidator: AbstractValidator<AcceptTransfer>
    {
        public AcceptTransferValidator()
        {
            RuleFor(at => at.AgentId).Matches(@"^[a-zA-Z]{3}[0-9]{3}$");
            RuleFor(at => at.ConversationId).NotNull().NotEmpty().Length(22);
        }
    }
}
