using System;

namespace Web.Models.Common
{
    public class Command: ICommand
    {
        public Guid Id { get; private set; }
        public byte[] Version { get; private set; }
        
        public Command(Guid id, byte[] version)
        {
            Id = id;
            Version = version;
        }
    }
}
