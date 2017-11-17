using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Data.Cache
{
    public class RedisService: IRedisService
    {
        private readonly ConnectionMultiplexer _multiplexer;

        public RedisService()
        {

        }
        public ConnectionMultiplexer Redis
        {
            get
            {
                if(_multiplexer == null)
                {
                    _multiplexer = LazyConnection
                }
            }
        }
    }
}
