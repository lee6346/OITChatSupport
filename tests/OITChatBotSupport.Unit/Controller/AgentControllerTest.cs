using MediatR;
using Microsoft.VisualStudio.TestPlatform.ObjectModel;
using Moq;
using OITChatBotSupport.Application.OITAgents.Commands;
using OITChatBotSupport.Application.OITAgents.Dtos;
using OITChatBotSupport.Domain.AgentSupport;
using OITChatBotSupport.Web.Controllers;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace OITChatBotSupport.Unit.Controller
{
    public class AgentControllerTest
    {
        [Fact]
        public async Task Connected_ReturnsAList_OfConnectedAgents()
        {
            var agents = GetConnectedAgents();
            var mockMediator = new Mock<IMediator>();
            var fakeAgentsList = new TestResult(new TestCase());
            
            var controller = new AgentController(mockMediator.Object);
           // mockMediator.Setup(mediatr => mediatr.Send(new TestRequest).Returns(Task.FromResult(agents));
        }

        private List<AgentDto> GetConnectedAgents()
        {
            var connectedAgents = new List<AgentDto>();
            connectedAgents.Add(new AgentDto
            {
                Connected = true,
                UtsaId = "jvr632"
            });
            connectedAgents.Add(new AgentDto
            {
                Connected = true,
                UtsaId = "jew632"
            });
            return connectedAgents;
        }

        //private IRequest<T> 
    }

}
