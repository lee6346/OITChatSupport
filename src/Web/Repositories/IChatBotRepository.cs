using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Models;

namespace Web.Repositories
{
    public interface IChatBotRepository
    {
        Task<ChatBot> GetByName(string botHandle);
        Task<IList<ChatBot>> GetAll();
        Task Add(ChatBot chatBot);
    }
}
