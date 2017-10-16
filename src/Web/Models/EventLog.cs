using System;
using Web.Models.Common;
namespace Web.Models
{
    public class EventLog : Entity
    {
        
        public string EventType { get; set; }
        public string Detail { get; set; }
        public DateTime Timestamp { get; set; }
        public bool Resolved { get; set; }

        public override string ToString()
        {
            return string.Format("Event: {0}, Time: {1}, Detail: {2}", EventType, Timestamp, Detail);
        }
    }
}