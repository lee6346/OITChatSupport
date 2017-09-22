using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.ValueObjects
{
    public static class TimeLineExtensions
    {
        public static bool IsSuperSet(this DateRange range, DateRange other)
        {
            if (range.Intersect(other) == other)
                return true;
            return false;
        }
    }
}
