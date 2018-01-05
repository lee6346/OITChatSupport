using MediatR;
using Newtonsoft.Json;

namespace OITChatBotSupport.Application.Student.Commands
{
    /// <summary>
    /// Command to cancel a live agent transfer request
    /// </summary>
    public class CancelTransferRequest : IRequest
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
    }
}
