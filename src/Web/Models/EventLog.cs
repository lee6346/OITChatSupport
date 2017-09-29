
using System;
using Web.Models.Common;
namespace Web.Models
{
    public class EventLog : Entity
    {

        public string Level { get; set; }
        public string Message { get; set; }
        public string EventType { get; set; }
        public byte[] RowVersion { get; set; }
        public DateTime Timestamp { get; set; }
        public bool Resolved { get; set; }


        public override string ToString()
        {
            return $"Date: {Timestamp}  Type:{EventType.ToString()}  Resolved:{Resolved.ToString()}  Level:{Level}  Message:{Message}";
        }
    }
}