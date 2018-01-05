using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace OITChatBotSupport.ChatBot.Infrastructure.Redis
{
    public class RedisSharedConnection
    {
        private static readonly object _lock = new object();

        private static readonly string LocalHost = "localhost";
        private static readonly int DefaultPort = 6379;


        private static Lazy<ConnectionMultiplexer> LazyConnection = new Lazy<ConnectionMultiplexer>(() =>
        {
            ConnectionMultiplexer multiplexer = ConnectionMultiplexer.Connect("localhost");
            multiplexer.PreserveAsyncOrder = false;
            return multiplexer;
        });

        public static ConnectionMultiplexer Connection => LazyConnection.Value;

        public static IDatabase RedisDatabase => Connection.GetDatabase();

    }
}