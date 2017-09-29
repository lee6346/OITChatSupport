using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Models;
using Microsoft.EntityFrameworkCore;
using Web.Data.Context;
using System.Linq;

namespace Web.Repositories
{
    public class DirectLineMessageRepository: IDirectLineMessageRepository
    {
        private readonly OitChatSupportContext _context;
        public DirectLineMessageRepository(OitChatSupportContext context)
        {
            _context = context;
        }
        public async Task AddAsync(DirectLineMessage directLineMessage)
        {
            try
            {
                _context.DirectLineMessages.Add(directLineMessage);
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateException e)
            {
                throw e;
            }
        }
        public async Task UpdateAsync(DirectLineMessage directLineMessage)
        {
            var dlm = await _context.DirectLineMessages.FirstOrDefaultAsync(p => p.Id == directLineMessage.Id);
            if(dlm != null)
            {
                dlm.ConversationId = directLineMessage.ConversationId;
                dlm.Sender = directLineMessage.Sender;
                dlm.Text = directLineMessage.Text;
                dlm.TimeSent = directLineMessage.TimeSent;
                try
                {
                    _context.DirectLineMessages.Update(dlm);
                    await _context.SaveChangesAsync();
                }
                catch(DbUpdateException e)
                {
                    throw e;
                }
            }
        }
        public async Task RemoveAsync(DirectLineMessage directLineMessage)
        {
            var dlm = await _context.DirectLineMessages.FirstOrDefaultAsync(p => p.Id == directLineMessage.Id);
            if(dlm != null)
            {
                try
                {
                    _context.DirectLineMessages.Remove(dlm);
                    await _context.SaveChangesAsync();
                }
                catch(DbUpdateException e)
                {
                    throw e;
                }
            }
        }
        public async Task<IList<DirectLineMessage>> GetAllFromDateAsync(DateTime startDate)
        {
            return await _context.DirectLineMessages.Where(a => a.TimeSent > startDate).ToListAsync();
        }
        public async Task<IList<DirectLineMessage>> GetMessagesByConversationAsync(string conversationId)
        {
            return await _context.DirectLineMessages.Where(a => a.ConversationId == conversationId).ToListAsync();
        }

        public async Task<IList<DirectLineMessage>> GetMessagesByAgentAsync(string utsaId)
        {
            return await GetMessagesByAgentAsync(utsaId, null);
        }

        public async Task<IList<DirectLineMessage>> GetMessagesByAgentAsync(string utsaId, DateTime? start)
        {
            if(start != null)
            {
                return await _context.DirectLineMessages.Where(a => a.Sender == utsaId && a.TimeSent > start).ToListAsync();
            }
            return await _context.DirectLineMessages.Where(a => a.Sender == utsaId).ToListAsync();
        }
        public async Task<IList<DirectLineMessage>> GetMessagesByBotAsync(string botHandle)
        {
            return await GetMessagesByBotAsync(botHandle, null);
        }
        public async Task<IList<DirectLineMessage>> GetMessagesByBotAsync(string botHandle, DateTime? start)
        {
            if(start != null)
            {
                return await _context.DirectLineMessages.Where(a => a.Sender == botHandle && a.TimeSent > start).ToListAsync();
            }
            return await _context.DirectLineMessages.Where(a => a.Sender == botHandle).ToListAsync();
        }
    }
}
