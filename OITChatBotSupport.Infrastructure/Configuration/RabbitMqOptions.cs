
namespace OITChatBotSupport.Infrastructure.Configuration
{
    public class RabbitMqOptions
    {
        public RabbitMqOptions()
        {
            Hostname = "";
            Username = "";
            Password = "";
        }

        public string Hostname { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
