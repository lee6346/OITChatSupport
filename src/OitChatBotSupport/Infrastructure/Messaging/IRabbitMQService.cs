using RabbitMQ.Client;

namespace OITChatBotSupport.Infrastructure.Messaging
{
    public interface IRabbitMQService
    {
        IConnection GetConnection();
    }
}
