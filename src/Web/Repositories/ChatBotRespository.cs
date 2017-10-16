using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Data.Context;
using Web.Models;

namespace Web.Repositories
{
    public class ChatBotRespository: IChatBotRepository
    {
        private readonly OitChatSupportContext _oitChatSupportContext;

        public ChatBotRespository(OitChatSupportContext oitChatSupportContext)
        {
            _oitChatSupportContext = oitChatSupportContext;
        }

        public async Task<ChatBot> GetByName(string botHandle)
        {
            return await _oitChatSupportContext
                .ChatBots
                .FirstOrDefaultAsync(bot => bot.BotHandle == botHandle);
        }

        public async Task<IList<ChatBot>> GetAll()
        {
            return await _oitChatSupportContext
                .ChatBots
                .ToListAsync();
        }

        public async Task Add(ChatBot chatBot)
        {
            try
            {
                _oitChatSupportContext.ChatBots.Add(chatBot);
                await _oitChatSupportContext.SaveChangesAsync();
            }
            catch (DbUpdateException addException)
            {
                throw addException;
            }
        }
    }
}
