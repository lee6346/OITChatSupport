using Domain.Model;
using Domain.Model.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Domain.Repositories
{
    public interface IDirectLineMessageRepository: IMessageRepository
    {
        IQueryable<DirectLineMessage> GetByConversationId(string conversationId);
        IQueryable<DirectLineMessage> GetByConversationId(string conversationId, DateTime start, int numOfDays);
        IQueryable<DirectLineMessage> GetAttachments();
    }
}
