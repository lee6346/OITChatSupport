﻿using MediatR;
using OITChatBotSupport.Application.Student.Commands;
using OITChatBotSupport.Domain.AgentSupport;
using OITChatBotSupport.Infrastructure.Data.InMemory;
using System.Threading;
using System.Threading.Tasks;

namespace OITChatBotSupport.Application.Student.Handlers
{
    /// <summary>
    /// Handles student requests to request or cancel live agent transfers
    /// </summary>
    public class TransferRequestHandler: IRequestHandler<RequestTransfer, RequestTransferResponse>,
        IRequestHandler<CancelTransferRequest>
    {
        private readonly IAgentTransferRepository _agentTransferRepository;
        private readonly IConnectedAgentTracker _connectedAgents;


        public TransferRequestHandler(IAgentTransferRepository agentTransferRepository, IConnectedAgentTracker connectedAgents)
        {
            _agentTransferRepository = agentTransferRepository;
            _connectedAgents = connectedAgents;
        }

        /// <summary>
        /// Process request to cancel transfer request made by student
        /// Removes it from the cache and updates the status in sql
        /// </summary>
        /// <param name="message">the request for cancelling agent transfer</param>
        /// <param name="cts">optional cancellation token</param>
        /// <returns></returns>
        public async Task Handle(CancelTransferRequest message, CancellationToken cts)
        {
            await _agentTransferRepository.UpdateRequestStatusAsync(message.ConversationId, "Cancelled");
        }

        /// <summary>
        /// Process request to make a new request to be transfered to agent
        /// Adds it to cache and adds it to sql. NOTE: adding to cache emits an event
        /// that the AgentHub class listens to, for pushing the data via web sockets to available agents
        /// </summary>
        /// <param name="request">the request for making a new agent transfer request</param>
        /// <param name="cts">optional cancellation token</param>
        /// <returns>Response information about agent availability and average number of students in line</returns>
        public async Task<RequestTransferResponse> Handle(RequestTransfer request, CancellationToken cts)
        {
            await _agentTransferRepository.AddNewRequestAsync(new AgentTransfer(request.ConversationId, request.BotHandle, request.LastMessage, request.Requested));
            return new RequestTransferResponse
            {
                AgentsAvailable = _connectedAgents.ConnectedCount() > 0,
                StudentsAhead = _connectedAgents.GetAverageWait()
            };
        }
    }
}
