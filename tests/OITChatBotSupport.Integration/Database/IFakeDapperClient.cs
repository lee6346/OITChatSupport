using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace OITChatBotSupport.Integration.Database
{
    public interface IFakeDapperClient
    {
        void SetParams(object param);
        void Add(string sqlCommand, object param = null, DbType? dbType = default(DbType), ParameterDirection? direction = default(ParameterDirection), int? size = default(int));
        T Get<T>(string sqlQuery);
        IEnumerable<string> ParamNames { get; }

    }
}
