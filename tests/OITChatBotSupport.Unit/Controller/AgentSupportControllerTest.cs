using OITChatBotSupport.Web.Controllers;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace OITChatBotSupport.Unit.Controller
{
    public class AgentSupportControllerTest
    {
        public AgentSupportControllerTest()
        {

        }

        [Fact(DisplayName = "CurrentRequest() should return all pending requests")]
        public async Task CurrentRequest_Should_Return_All_Pending_Requests()
        {
            //var controller = new AgentSupportController();
        }

        [Fact(DisplayName = "MakeRequest(request) should return response of wait status")]
        public async Task MakeRequest_Should_Return_Response_Of_Wait_Status()
        {

        }

        [Fact(DisplayName = "CancelRequest(threadId) should return Http OK response")]
        public async Task CancelRequest_Should_Return_Http_Ok_Response()
        {

        }

        [Fact(DisplayName = "AcceptRequest(threadId, agentId) should return a Conversation Object")]
        public async Task AcceptRequest_Should_Return_Conversation_Object()
        {

        }

    }
}
