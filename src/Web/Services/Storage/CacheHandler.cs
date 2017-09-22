using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Services.Storage
{
    public class CacheHandler: ICacheHandler
    {

        private readonly ICacheHandler _cacheHandler;
        public CacheHandler()
        {
            _cacheHandler = CacheFactory.GetCacheHandler();
        }
        public virtual void Add<T>(T val, string key, int timeout)
        {
            _cacheHandler.Add(val, key, timeout);
        }
        public virtual void Remove(string key)
        {
            _cacheHandler.Remove(key);
        }
        public virtual T Get<T>(string key)
        {
            var result = (T)_cacheHandler.GetData(key);
            return result;
        }
        public virtual void Scan(int? maxTime)
        {

        }
    }
}
