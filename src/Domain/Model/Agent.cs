using Domain.Model.Common;
using System;

namespace Domain.Model
{
    public class Agent : Faculty
    {
        public Agent(string utsaId, int department)
        {
            UtsaId = utsaId;
            Connected = true;
            UtsaDepartment = (UtsaDepartment)department;

        }

        UtsaDepartment _utsaDepartment;

        public UtsaDepartment UtsaDepartment
        {
            get { return _utsaDepartment; }
            private set
            {
                if (Enum.IsDefined(typeof(UtsaDepartment), value))
                    _utsaDepartment = value;
            }
        }
        public bool Connected { get; set; }


        public bool ValidDepartment(int i)
        {
            return Enum.IsDefined(typeof(UtsaDepartment), i);
        }

        public override string ToString()
        {
            return string.Format("Agent: {0}, Department: {1}, Connection status: {2}",
                UtsaId, UtsaDepartment.ToString(), Connected);
        }
    }
}