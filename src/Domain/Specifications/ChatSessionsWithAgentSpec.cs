using Domain.Common;
using Domain.Model;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Domain.Specifications
{
    public class ChatSessionsWithAgentSpec: ISpecification<DirectLineConnection>
    {
        public Expression<Func<DirectLineConnection, bool>> Criteria
        {
            get { return e => true; }
        }

        public Expression<Func<DirectLineConnection, object>> Include
        {
            get { return}
        }
    }
}
