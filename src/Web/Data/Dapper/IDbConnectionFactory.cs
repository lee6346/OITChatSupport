using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace Web.Data.Dapper
{
    public interface IDbConnectionFactory
    {
        IDbConnection MakeConnection();
    }
}
