using Newtonsoft.Json;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;

namespace TestChatBot.Infrastructure.Redis
{
    public class CacheHelper
    {
        protected virtual byte[] Serialize(object item)
        {
            var jsonString = JsonConvert.SerializeObject(item);
            return Encoding.UTF8.GetBytes(jsonString);
        }
        protected virtual T Deserialize<T>(string[] serializedObject)
        {
            if (serializedObject == null)
                return default(T);

            string jsonString = "[";
            foreach (var item in serializedObject)
                jsonString += item + ",";
            jsonString += "]";
            return JsonConvert.DeserializeObject<T>(jsonString);
        }
    }
    public class RedisCacheManager: CacheHelper, ICacheManager
    {
        private static IDatabase _db;
        private static readonly string host = "localhost";
        private static readonly int port = 6379;

        public RedisCacheManager()
        {
            CreateRedisDB();
        }

        private static IDatabase CreateRedisDB()
        {
            if (null == _db)
            {
                ConfigurationOptions option = new ConfigurationOptions();
                option.Ssl = false;
                option.EndPoints.Add(host, port);
                var connect = ConnectionMultiplexer.Connect(option);
                _db = connect.GetDatabase();
            }

            return _db;
        }

        public void Clear()
        {
            var server = _db.Multiplexer.GetServer(host, port);
            foreach (var item in server.Keys())
                _db.KeyDelete(item);
        }

        public T Get<T>(string key)
        {
            var rValue = _db.SetMembers(key);
            if (rValue.Length == 0)
                return default(T);

            var result = Deserialize<T>(rValue.ToStringArray());
            return result;
        }

        public bool IsSet(string key)
        {
            return _db.KeyExists(key);
        }

        public bool Remove(string key)
        {
            return _db.KeyDelete(key);
        }

        public void RemoveByPattern(string pattern)
        {
            var server = _db.Multiplexer.GetServer(host, port);
            foreach (var item in server.Keys(pattern: "*" + pattern + "*"))
                _db.KeyDelete(item);
        }

        public void Set(string key, object data, int cacheTime)
        {
            if (data == null)
                return;

            var entryBytes = Serialize(data);
            _db.SetAdd(key, entryBytes);

            var expiresIn = TimeSpan.FromMinutes(cacheTime);

            if (cacheTime > 0)
                _db.KeyExpire(key, expiresIn);
        }
    }
    
}