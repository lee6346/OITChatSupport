﻿using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web.Data.Cache
{
    public interface IRedisService
    {
        ConnectionMultiplexer Redis { get; }
    }
}
