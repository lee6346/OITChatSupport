
namespace Web.Models.Common
{
    public interface ICommandHandler<TCommand>
        where TCommand: Command
    {
        void Execute(TCommand command);
    }
}
