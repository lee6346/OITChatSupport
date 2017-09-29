using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Models;
using Web.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace Web.Repositories
{
    public class AdminRepository: IAdminRepository
    {

        private readonly OitChatSupportContext _context;
        public AdminRepository(OitChatSupportContext context)
        {
            _context = context;
        }
        public async Task<Admin> GetByIdAsync(string utsaId)
        {
                return await _context.Admins
                    .FirstOrDefaultAsync(a => a.UtsaId == utsaId);
        }
        public async Task<IEnumerable<Admin>> GetAllAsync()
        {
            return await GetAllAsync(false);
        }
        public async Task<IEnumerable<Admin>> GetAllAsync(bool connected)
        {
            
            if (connected)
            {
                return await _context.Admins.Where(b => b.Connected).ToListAsync();
            }
            return await _context.Admins.ToListAsync();
        }
        public async Task AddAsync(Admin admin)
        {
            try
            {
                _context.Admins.Add(admin);
                await _context.SaveChangesAsync();
            }
            catch(DbUpdateException e)
            {
                throw e;
            }

        }
        public async Task UpdateAsync(Admin admin)
        {
            var ad = await _context.Admins.FirstOrDefaultAsync(b => b.UtsaId == admin.UtsaId);
            if(ad != null)
            {
                ad.Connected = admin.Connected;
                try
                {
                    _context.Admins.Update(ad);
                    await _context.SaveChangesAsync();
                }
                catch(DbUpdateException e)
                {
                    throw e;
                }
            }
        }
        public async Task RemoveAsync(Admin admin)
        {
            var ad = await _context.Admins.FirstOrDefaultAsync(b => b.UtsaId == admin.UtsaId);
            if(ad != null)
            {
                try
                {
                    _context.Admins.Remove(ad);
                    await _context.SaveChangesAsync();
                }
                catch(DbUpdateException e)
                {
                    throw e;
                }
            }
        }
    }
}
