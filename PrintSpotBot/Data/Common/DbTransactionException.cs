using System;

namespace PrintSpotBot.Data.Common
{
    public class DbTransactionException: Exception
    {
        public DbTransactionException(string message): base(message)
        { 
        }
    }
}