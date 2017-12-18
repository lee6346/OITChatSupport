﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestChatBot.Dialogs
{
    public interface IDialogFactory
    {
        T Create<T>();

        T Create<T, U>(U parameter);

        T Create<T>(IDictionary<string, object> parameters);
    }
}