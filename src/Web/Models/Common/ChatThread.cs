namespace Web.Models.Common
{
    public abstract class ChatThread: Entity
    {
        public byte[] RowVersion { get; set; }
    }
}