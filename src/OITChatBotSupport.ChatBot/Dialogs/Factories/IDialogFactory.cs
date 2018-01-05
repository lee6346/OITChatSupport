using System.Collections.Generic;

namespace OITChatBotSupport.ChatBot.Dialogs.Factories
{
    public interface IDialogFactory
    {
        T Create<T>();
        T Create<T, U>(U param);
        T Create<T>(IDictionary<string, object> @params);
    }
}
