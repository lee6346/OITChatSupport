using MediatR;
using System;

namespace OITChatSupport.Domain.Core
{
    public abstract class Event: INotification
    {
        public DateTime Timestamp { get; private set; }

        protected Event(): this(DateTime.UtcNow) { }

        protected Event(DateTime timestamp)
        {
            Timestamp = timestamp;
        }
    }
}