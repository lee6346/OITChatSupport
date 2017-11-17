using System;
using Web.Models.Common;

namespace Web.Models.Commands
{
    public class RequestAgentTransfer: Command
    {
        public DateTime Timestamp { get; internal set; } = DateTime.UtcNow;
        public CommandType CommandType { get; internal set; }
        public RequestAgentTransfer(Guid id, byte[] version, DateTime timestamp)
            : base(id, version)
        {
            Timestamp = timestamp;
            CommandType = CommandType.RequestAgentTransfer;
        }
    }
}
