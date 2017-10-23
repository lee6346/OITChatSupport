using Microsoft.AspNetCore.Mvc;
using Web.Dtos;
using System.Threading.Tasks;
using Web.Services;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class GroupChatController: BaseController
    {
        private readonly IGroupChatService _groupChatService;

        public GroupChatController(IGroupChatService groupChatService)
        {
            _groupChatService = groupChatService;
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Message([FromBody] GroupMessageDto groupMessage)
        {
            await _groupChatService.SendMessage(groupMessage);
            return Json(Ok());
        }

        [HttpGet("[action]/{group}")]
        public async Task<IActionResult> Messages(string group)
        {
            var messages = await _groupChatService.GetCurrentChatLog(group);
            return Json(messages);
        }
    }
}
