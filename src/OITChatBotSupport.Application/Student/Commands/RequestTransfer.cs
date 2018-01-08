using MediatR;
using Newtonsoft.Json;
using System;

namespace OITChatBotSupport.Application.Student.Commands
{
    /// <summary>
    /// Command to make a request for a live agent transfer
    /// </summary>
    public class RequestTransfer : IRequest<RequestTransferResponse>
    {
        [JsonProperty("conversationId")]
        public string ConversationId { get; set; }
        [JsonProperty("botHandle")]
        public string BotHandle { get; set; }
        [JsonProperty("lastMessage")]
        public string LastMessage { get; set; }
        [JsonProperty("requested")]
        public DateTimeOffset Requested { get; set; } = DateTimeOffset.UtcNow;
    }

    /// <summary>
    /// The response data from the command sent back to the client
    /// </summary>
    public class RequestTransferResponse
    {
        [JsonProperty("agentsAvailable")]
        public bool AgentsAvailable { get; set; }
        [JsonProperty("studentsAhead")]
        public int StudentsAhead { get; set; }
    }
}
