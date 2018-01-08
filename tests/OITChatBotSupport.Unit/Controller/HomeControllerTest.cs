using Microsoft.AspNetCore.Mvc;
using OITChatBotSupport.Web.Controllers;
using Xunit;

namespace OITChatBotSupport.Unit.Controller
{
    public class HomeControllerTest
    {
        public HomeControllerTest()
        {
        }

        [Fact(DisplayName ="Index() should return page with link to launch chat window")]
        public void Index_Should_Return_Page_With_Link_To_Launch_Chat_Window()
        {
            var controller = new HomeController();
            var viewResult = (ViewResult)controller.Index();
            var viewName = viewResult.ViewName;

            Assert.True(string.IsNullOrEmpty(viewName) || viewName == "Index");
        }

        [Fact(DisplayName = "Agent() should return the agent portal view")]
        public void Agent_Should_Return_Agent_Portal_View()
        {
            var controller = new HomeController();
            var viewResult = (ViewResult)controller.Agent();
            var viewName = viewResult.ViewName;

            Assert.True(string.IsNullOrEmpty(viewName) || viewName == "Agent");
        }

        [Fact(DisplayName = "Chatbot() should return the Chat window view")]
        public void Chatbot_Should_Return_Chat_Window_View()
        {
            var controller = new HomeController();
            var viewResult = (ViewResult)controller.Chatbot();
            var viewName = viewResult.ViewName;

            Assert.True(string.IsNullOrEmpty(viewName) || viewName == "Chatbot");
        }
    }
}
