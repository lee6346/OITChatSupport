using System.Threading.Tasks;
using Web.Models;

namespace Web.Data.Dapper
{
    public class SampleRepo
    {
        private readonly IDbConnectionFactory _dbConnectionFactory;
        public SampleRepo(IDbConnectionFactory dbConnectionFactory)
        {
            _dbConnectionFactory = dbConnectionFactory;
        }
        public async Task<Admin> GetByIdAsync(string utsaId)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {
                return null;
            }
        }
    }
}
