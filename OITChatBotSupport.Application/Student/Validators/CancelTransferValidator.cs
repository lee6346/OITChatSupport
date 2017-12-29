using FluentValidation;
using OITChatBotSupport.Application.Student.Commands;

namespace OITChatBotSupport.Application.Student.Validators
{
    public class CancelTransferValidator: AbstractValidator<CancelTransferRequest>
    {
        public CancelTransferValidator()
        {
            RuleFor(transfer => transfer.ConversationId).NotNull().NotEmpty().Length(22);
        }
    }
}
