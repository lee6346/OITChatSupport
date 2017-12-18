namespace OITChatSupport.Domain.Core
{
    public interface IAggregateRoot<TKey, TRoot>
        where TRoot: Entity<TKey>
    {
        
    }
}