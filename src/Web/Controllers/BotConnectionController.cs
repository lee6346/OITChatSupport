using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Web.Services;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    public class BotConnectionController: BaseController
    {
        private readonly IBotConnectionService _botConnectionService;

        public BotConnectionController(IBotConnectionService botConnectionService)
        {
            _botConnectionService = botConnectionService;
        }

        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> Token(string id)
        {
            var token = await _botConnectionService.GetTokenAsync(id);
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
