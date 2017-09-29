namespace Web.Models.Common
{
    public enum EventType
    {
        InternalServerError,
        NetworkError,
        MemoryError,
        CacheError,
        DatabaseError,
        ClientError,
        RepeatedAccessFailure,
        All
    }
}
