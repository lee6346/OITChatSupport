using Domain.Common;
using Domain.Model.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Repositories
{
    public interface IMessageRepository: IRepository<ChatMessage>
    {
        IQueryable<ChatMessage> GetAll();
        IQueryable<ChatMessage> GetAll(bool connected);
        IQueryable<ChatMessage> GetByDate(DateTime startDate);
        IQueryable<ChatMessage> GetByDateRange(DateTime startDate, int numOfDays);

    }
}
