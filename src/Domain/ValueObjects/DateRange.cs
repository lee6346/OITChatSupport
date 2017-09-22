using Domain.Common;
using System;

namespace Domain.ValueObjects
{
    public class DateRange: ValueObject<DateRange>
    {
        public DateRange(DateTime start, DateTime end)
        {
            if (end < start)
                throw new ArgumentException(
                    start.ToString() + " is not later than " + end.ToString()
                );
            _start = start;
            _end = end;
        }

        private readonly DateTime _start;
        private readonly DateTime _end;

        public DateTime Start { get { return _start; } }
        public DateTime End { get { return _end; } }

        public DateRange Union(DateRange other)
        {
            if (ReferenceEquals(other, null))
                return new DateRange(Start, End);

            if (IsOutside(other))
                return null;

            return new DateRange(
                other.Start < Start ? other.Start : Start,
                other.End > End ? other.End : End
            );
        }

        public DateRange Intersect(DateRange other)
        {
            if (ReferenceEquals(other, null))
                return null;


            if (IsOutside(other))
                return null;

            return new DateRange(
                other.Start > Start ? other.Start : Start,
                other.End < End ? other.End : End
            );
        }

        public bool IsOutside(DateRange other)
        {
            return other.Start > End || other.End < Start;
        }

        protected override bool EqualsCore(DateRange other)
        {
            return (End.Subtract(Start) == other.End.Subtract(other.Start));
        }

        protected override int GetHashCodeCore()
        {
            unchecked
            {
                int hash = (int)2166136261;
                return Start.GetHashCode() ^ (hash * End.GetHashCode());
            }
        }


        public double GetDays()
        {
            return End.Subtract(Start).TotalDays;
        }
        
        public double GetHours()
        {
            return End.Subtract(Start).TotalHours;
        }

        public double GetMinutes()
        {
            return End.Subtract(Start).TotalMinutes;
        }

        public double GetSeconds()
        {
            return End.Subtract(Start).TotalSeconds;
        }

        public double GetMilliSeconds()
        {
            return End.Subtract(Start).TotalMilliseconds;
        }


        public override string ToString()
        {
            return "Start: " + Start.ToString() + ", End: " + End.ToString() + ", Range: " + (End - Start);  
        }
    }
}
