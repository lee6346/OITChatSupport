using Data.Dapper;
using Domain.Model;
using Domain.Model.Common;
using Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public class EventLogRepository: IEventLogRepository
    {
        private readonly IDbConnectionFactory _dbConnectionFactory;
        public EventLogRepository(IDbConnectionFactory dbConnectionFactory)
        {
            _dbConnectionFactory = dbConnectionFactory;
        }
        public async Task<EventLog> GetByIdAsync(long id)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
        public async Task<IEnumerable<EventLog>> GetUnresolvedAsync()
        {
            return await GetUnresolvedAsync(EventType.All, null);
        }
        public async Task<IEnumerable<EventLog>> GetUnresolvedAsync(EventType eventType)
        {
            return await GetUnresolvedAsync(eventType, null);
        }
        public async Task<IEnumerable<EventLog>> GetUnresolvedAsync(string level)
        {
            return await GetUnresolvedAsync(EventType.All, level);
        }
        public async Task<IEnumerable<EventLog>> GetUnresolvedAsync(EventType eventType, string level)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
        public async Task<IEnumerable<EventLog>> GetResolvedAsync(DateTime start, int numDays)
        {
            return await GetResolvedAsync(EventType.All, null, start, numDays);
        }
        public async Task<IEnumerable<EventLog>> GetResolvedAsync(EventType eventType, DateTime start, int numDays)
        {
            return await GetResolvedAsync(eventType, null, start, numDays);
        }
        public async Task<IEnumerable<EventLog>> GetResolvedAsync(string level, DateTime start, int numDays)
        {
            return await GetResolvedAsync(EventType.All, level, start, numDays);
        }
        public async Task<IEnumerable<EventLog>> GetResolvedAsync(EventType eventType, string level, DateTime start, int numDays)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
        public async Task UpdateStatusAsync(EventLog eventLog)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
        public async Task RemoveAsync(EventLog eventLog)
        {
            using (var sqlConnection = _dbConnectionFactory.MakeConnection())
            {

            }
        }
    }
}
