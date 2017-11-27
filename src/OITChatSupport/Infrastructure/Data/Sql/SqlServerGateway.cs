using Microsoft.Extensions.Options;
using OITChatSupport.Infrastructure.Configuration;
using System;
using System.Data;
using System.Data.SqlClient;

namespace OITChatSupport.Infrastructure.Data.Sql
{
    public class SqlServerGateway: ISqlServerGateway
    {
        private readonly string _connectionString;
        private IDbConnection _connection;

        public SqlServerGateway(IOptions<SqlServerOptions> options)
        {
            _connectionString = options.Value.LocalConnectionString;
        }

        private IDbTransaction _transaction { get; set; }

        public IDbConnection Connection
        {
            get
            {
                var connection = new SqlConnection(_connectionString);
                try
                {
                    connection.Open();
                    return connection;
                }
                catch (SqlException e)
                {
                    throw e;
                }
            }
        }

        public IDbTransaction StartTransaction()
        {
            if (_transaction == null || _transaction.Connection == null)
            {
                _transaction = Connection.BeginTransaction();
            }
            return _transaction;
        }

        public T Transaction<T>(Func<IDbTransaction, T> query)
        {
            using (var connection = Connection)
            using (var transaction = StartTransaction())
            {
                try
                {
                    var result = query(transaction);
                    transaction.Commit();
                    return result;
                }
                catch (Exception e)
                {
                    transaction.Rollback();
                    throw e;
                }
            }
        }

        public void Commit()
        {
            try
            {
                _transaction.Commit();
                _transaction.Dispose();
                _transaction = null;
            }
            catch (Exception e)
            {
                if (_transaction != null && _transaction.Connection != null)
                {
                    Rollback();
                }
                throw e;
            }
        }
        public void Rollback()
        {
            try
            {
                _transaction.Rollback();
                _transaction.Dispose();
                _transaction = null;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void Dispose()
        {
            if (_transaction != null)
            {
                _transaction.Dispose();
                _transaction = null;
            }
            if (_connection != null && _connection.State != ConnectionState.Closed)
            {
                _connection.Close();
                _connection = null;
            }
        }
    }
}
