using System.Collections.Generic;

namespace TestChatBot.Dialogs.Factories
{
    public interface IDialogFactory
    {
        T Create<T>();
        T Create<T, U>(U param);
        T Create<T>(IDictionary<string, object> @params);
    }
}
