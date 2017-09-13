using OITChatSupport.Web.Dtos;
using System.Threading.Tasks;

namespace OITChatSupport.Web.Services
{
    /// <summary>
    /// Direct line interface to receive conversation ids, tokens, new connections, etc from the direct line api
    /// </summary>
    public interface IDirectLineService
    {
        Task<DirectLineTokenDto> RequestDirectLineTokenAsync();

        Task<DirectLineSocketStreamDto> RequestDirectLineSocketAsync(string conversationId);

    }
}