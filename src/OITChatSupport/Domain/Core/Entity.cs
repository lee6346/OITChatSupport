
namespace OITChatSupport.Domain.Core
{
    public abstract class Entity<TId>
    {

        public virtual TId Id { get; protected set; }
        //public byte[] RowVersion { get; protected set; }

        public override bool Equals(object obj)
        {
            var other = obj as Entity<TId>;

            if (ReferenceEquals(other, null))
                return false;

            if (ReferenceEquals(this, other))
                return true;

            /*if (Id == null || other.Id == null)
                return false;

            return Id == other.Id;*/
            return IdEquals(other.Id);
        }

        public abstract bool IdEquals(TId id);

        public static bool operator ==(Entity<TId> a, Entity<TId> b)
        {
            if (ReferenceEquals(a, null) && ReferenceEquals(b, null))
                return true;

            if (ReferenceEquals(a, null) || ReferenceEquals(b, null))
                return false;

            return a.Equals(b);
        }

        public static bool operator !=(Entity<TId> a, Entity<TId> b)
        {
            return !(a == b);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int hash = (int)2166136261;
                if (Id < 0)
                    return 0;
                return (hash * 16777619) ^ Id.GetHashCode();
            }
        }

    }

    public abstract
}
