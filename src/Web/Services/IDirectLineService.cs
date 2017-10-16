using Web.Dtos;
using System.Threading.Tasks;

namespace Web.Services
{

    public interface IDirectLineService
    {
        Task<DirectLineThreadDto> CreateThreadAsync();

        Task<DirectLineConnectionDto> GetThreadConnectionAsync(string conversationId);

    }
}