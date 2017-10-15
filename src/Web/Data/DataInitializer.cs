using Web.Data.Context;
namespace Web.Data
{
    public static class DataInitializer
    {
        public static void Initialize(OitChatSupportContext context)
        {
            context.Database.EnsureCreated();
        }
    }
}