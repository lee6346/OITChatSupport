using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace Data.Dapper
{
    public interface IDbConnectionFactory
    {
        IDbConnection MakeConnection();
    }
}
