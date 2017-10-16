using System.Collections.Generic;
using System.Threading.Tasks;
using Web.Models;

namespace Web.Repositories
{
    public interface IDepartmentRepository
    {
        Task<Department> GetById(string departmentId);
        Task<IList<Department>> GetAll();
        Task Add(Department department);
    }
}
