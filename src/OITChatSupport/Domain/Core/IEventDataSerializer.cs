using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OITChatSupport.Domain.Core
{
    public interface IEventSerializer<T>
    {
        string SerializeEvent(Event @event);

    }
}
