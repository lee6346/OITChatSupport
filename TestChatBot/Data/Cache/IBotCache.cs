using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestChatBot.Data.Cache
{
    public interface IBotCache
    {
        T Get<T>(string key);

        T Get<T>(string key, Func<T> query);

        void Set<T>(string key, T value, int duration, bool broadcast = false);

        

    }
}
