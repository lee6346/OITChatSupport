﻿using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Web.Common
{
    public interface ISpecification<T>
    {
        Expression<Func<T, bool>> Criteria { get; }
        Expression<Func<T, object>> Include { get;  }
    }
}
