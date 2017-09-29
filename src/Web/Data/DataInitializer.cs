using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Data.Context;
using Web.Models;

namespace Web.Data
{
    public static class DataInitializer
    {
        public static void Initialize(OitChatSupportContext context)
        {
            context.Database.EnsureCreated();

        }
    }
}