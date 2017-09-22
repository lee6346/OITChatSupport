using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.Storage
{
    public interface ICacheHandler
    {
        void Add<T>(T val, string key, int timeout);
        void Remove(string key);
        T Get<T>(string key);
        void Scan(int? maxTime);
    }
}
