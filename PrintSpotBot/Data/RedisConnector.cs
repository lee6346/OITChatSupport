using Microsoft.Bot.Connector;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Configuration;

namespace PrintSpotBot.Data
{
    public class RedisConnector
    {
        ConfigurationOptions config = new ConfigurationOptions();
        private static readonly Lazy<ConnectionMultiplexer> _lazyConnection;

        static RedisConnector()
        {

            var config = new ConfigurationOptions
            {
                
            };

            _lazyConnection = new Lazy<ConnectionMultiplexer>(() => ConnectionMultiplexer
            .Connect(WebConfigurationManager.ConnectionStrings["redisConnectionString"].ConnectionString));
        }

        public static ConnectionMultiplexer Connection => _lazyConnection.Value;
        public static IDatabase RedisCache => Connection.GetDatabase();


        public string Get(string key)
        {

        
            return RedisCache.StringGet(key);
        }
    }
}