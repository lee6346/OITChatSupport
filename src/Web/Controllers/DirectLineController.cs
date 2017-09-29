using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OITChatSupport.Web.Dtos;
using OITChatSupport.Web.Services;
using Web.Dtos;

namespace OITChatSupport.Web.Controllers
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
        [HttpGet("[action]")]
        public async Task<IActionResult> GetToken()
        {
            DirectLineTokenDto conversation = await _directLineService.RequestDirectLineTokenAsync();
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

            DirectLineSocketStreamDto connection = await _directLineService.RequestDirectLineSocketAsync(id);
            return Json(connection);
        }


        /// <summary>
        /// Store new connection in db
        /// </summary>
        /// <param name="agentDto">Object: conversation id, user, time</param>
        /// <returns>Ok, throw error on failure</returns>
        [HttpPost("[action]")]
        public async Task<IActionResult> StartConnection([FromBody] DirectLineConnectionDto connection)
        {
            return Json(Ok());
        }

        /// <summary>
        /// End current direct line connection and notify agents
        /// </summary>
        /// <param name="connection"></param>
        /// <returns></returns>
        [HttpPost("[action]")]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> EndConnection([FromBody] DirectLineConnectionDto connection)
        {
            return Json(connection);
        }


    }
}