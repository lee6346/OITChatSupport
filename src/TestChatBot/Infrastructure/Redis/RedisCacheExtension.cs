using StackExchange.Redis;
using System;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;

namespace TestChatBot.Infrastructure.Redis
{
    public static class RedisCacheExtension
    {
        public static T Get<T>(this IDatabase cache, string key)
        {
            return Deserialize<T>(cache.StringGet(key));
        }

        public static object Get(this IDatabase cache, string key)
        {
            return Deserialize<object>(cache.StringGet(key));
        }

        public static void Set(this IDatabase cache, string key, object value)
        {
            cache.StringSet(key, Serialize(value));
        }

        public static void ClearCache(this IDatabase cache, string host, int port)
        {
            var server = cache.Multiplexer.GetServer(host, port);
            foreach(var key in server.Keys())
            {
                cache.KeyDelete(key);
            }
        }

        static byte[] Serialize(object o)
        {
            if(o == null)
            {
                return null;
            }
            BinaryFormatter binaryFormatter = new BinaryFormatter();
            using(MemoryStream ms = new MemoryStream())
            {
                binaryFormatter.Serialize(ms, o);
                byte[] objectDataAsStream = ms.ToArray();
                return objectDataAsStream;
            }
        }
        static T Deserialize<T>(byte[] stream)
        {
            BinaryFormatter bf = new BinaryFormatter();
            if(stream == null)
            {
                return default(T);
            }
            using(MemoryStream ms = new MemoryStream(stream))
            {
                T result = (T)bf.Deserialize(ms);
                return result;
            }
        }
    }
}