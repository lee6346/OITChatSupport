using System;

namespace Data.Errors
{
    public class SqlTransactionException : Exception
    {
        public SqlTransactionException(string message) : base(message) { }
        public SqlTransactionException(string message, Exception e) : base(message, e) { }
    }
}
