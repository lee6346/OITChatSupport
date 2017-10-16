using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Data.Context;
using Web.Models;

namespace Web.Repositories
{
    public class DepartmentRepository: IDepartmentRepository
    {
        private readonly OitChatSupportContext _oitChatSupportContext;

        public DepartmentRepository(OitChatSupportContext oitChatSupportContext)
        {
            _oitChatSupportContext = oitChatSupportContext;
        }

        public async Task<Department> GetById(string departmentId)
        {
            return await _oitChatSupportContext
                .Departments
                .FirstOrDefaultAsync(department => department.DepartmentId == departmentId);
        }

        public async Task<IList<Department>> GetAll()
        {
            return await _oitChatSupportContext
                .Departments
                .ToListAsync();
        }

        public async Task Add(Department department)
        {
            try
            {
                _oitChatSupportContext.Departments.Add(department);
                await _oitChatSupportContext.SaveChangesAsync();
            }
            catch(DbUpdateException addException)
            {
                throw addException;
            }
        }


    }
}
