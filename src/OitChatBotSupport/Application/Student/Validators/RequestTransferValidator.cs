using FluentValidation;
using OITChatBotSupport.Application.Student.Commands;

namespace OITChatBotSupport.Application.Student.Validators
{
    /// <summary>
    /// Validation for student request to be transfered to agent
    /// Rules: conversation Id length, a non-null bot name and last message to provide agents with context
    /// </summary>
    public class RequestTransferValidator: AbstractValidator<RequestTransfer>
    {
        RequestTransferValidator()
        {
            RuleFor(transfer => transfer.ConversationId).NotNull().NotEmpty().Length(22);
            RuleFor(transfer => transfer.BotHandle).NotNull().NotEmpty();
            RuleFor(transfer => transfer.LastMessage).NotNull();
        }
    }
}
