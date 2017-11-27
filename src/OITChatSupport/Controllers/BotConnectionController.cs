using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using OITChatSupport.Infrastructure.REST;
namespace OITChatSupport.Controllers
{
    [Route("api/[controller]")]
    public class BotConnectionController: BaseController
    {
        private readonly IDirectLineGateway _botConnectionService;
        public BotConnectionController(IDirectLineGateway botConnectionService)
        {
            _botConnectionService = botConnectionService;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> Token()
        {
            var token = await _botConnectionService.GetTokenAsync();
            return Json(token);
        }

        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> StreamUrl(string id)
        {
            var connection = await _botConnectionService.GetConnectionStreamAsync(id);
            return Json(connection);
        }

    }
}
