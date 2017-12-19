using System.Collections.Generic;

namespace OITChatBot.Dialogs.Factories
{
    public interface IDialogFactory
    {
        T Create<T>();
        T Create<T, U>(U param);
        T Create<T>(IDictionary<string, object> @params);
    }
}
