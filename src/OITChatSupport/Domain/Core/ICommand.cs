using System;

namespace OITChatSupport.Domain.Core
{
    public interface ICommand
    {
        Guid Id { get; }
    }
}
