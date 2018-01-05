using MediatR;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
namespace OITChatBotSupport.Application.OITAgents.Commands
{
    /// <summary>
    /// Command to retrieve all pending requests for agent transfer
    /// </summary>
    public class GetPendingRequests: IRequest<List<GetPendingRequestResponse>>
    {
    }

    /// <summary>
    /// The response data from retrieving all pending requests
    /// </summary>
    public class GetPendingRequestResponse
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("requested")]
        public DateTime Requested { get; set; }
        [JsonProperty("botHandle")]
        public string BotHandle { get; set; }
        [JsonProperty("lastMessage")]
        public string LastMessage { get; set; }
    }
}
