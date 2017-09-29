﻿using System;

namespace Data.Errors
{
    public class SqlQueryException: Exception
    {
        public SqlQueryException(string message) : base(message) { }
        public SqlQueryException(string message, Exception e): base(message, e){ }
    }
}