
namespace OITChatSupport.Domain.Core
{
    public interface ICommandHandler<TCommand>
        where TCommand: Command
    {
        void Execute(TCommand command);
    }
}
