using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Web.Dtos;
using Web.Services;

namespace Web.Controllers
{
    /// <summary>
    /// Handles direct line api calls for tokens, connections, conversation ids
    /// </summary>
    [Route("api/[controller]")]
    public class DirectLineController : BaseController
    {
        private readonly IDirectLineService _directLineService;
        /// <summary>
        /// Injects the service that makes Http client calls to the direct line api to receive requested data
        /// </summary>
        /// <param name="directLineService">Direct line service interface</param>
        public DirectLineController(IDirectLineService directLineService)
        {
            _directLineService = directLineService;
        }
        /// <summary>
        /// Receive a new token and a conversation Id to chat with the bot
        /// </summary>
        /// <returns>conversation id, new token</returns>
        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetToken(string id)
        {
            DirectLineThreadDto conversation = await _directLineService.CreateThreadAsync();
            return Json(conversation);
        }
        /// <summary>
        /// Receive a new token and a web socket stream url to connect to an existing conversation
        /// </summary>
        /// <param name="id">conversation id</param>
        /// <returns>socket stream url and a token</returns>
        [HttpGet("[action]/{id}")]
        public async Task<IActionResult> GetStreamUrl(string id)
        {
            DirectLineConnectionDto connection = await _directLineService.GetThreadConnectionAsync(id);
            return Json(connection);
        }

    }
}