namespace Web.Models.Common
{
    public abstract class ChatConnection: Entity
    {
        public byte[] RowVersion { get; set; }
    }
}