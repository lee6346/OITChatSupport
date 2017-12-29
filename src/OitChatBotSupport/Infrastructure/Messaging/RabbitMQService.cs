using Microsoft.Extensions.Options;
using OITChatBotSupport.Infrastructure.Configuration;
using RabbitMQ.Client;

namespace OITChatBotSupport.Infrastructure.Messaging
{
    public class RabbitMQService: IRabbitMQService
    {
        private IConnectionFactory connectionFactory;

        public RabbitMQService(IOptions<RabbitMqOptions> options)
        {
            connectionFactory = new ConnectionFactory()
            {
                HostName = options.Value.Hostname,
                UserName = options.Value.Username,
                Password = options.Value.Password
            };
        }

        public IConnection GetConnection()
        {
            return connectionFactory.CreateConnection();
        }
    }
}
