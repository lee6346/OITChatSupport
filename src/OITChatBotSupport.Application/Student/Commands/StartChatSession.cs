using MediatR;
using Microsoft.Bot.Connector.DirectLine;

namespace OITChatBotSupport.Application.Student.Commands
{
    /// <summary>
    /// Command to retrieve a token and conversation ID to chat with the bot
    /// </summary>
    public class StartChatSession : IRequest<Conversation>
    {
    }

}
