using Web.Models.Common;
using System;

namespace Web.Models
{
    public class Agent : Faculty
    {
        public string UtsaDepartment { get; set; }
        public bool Connected { get; set; }
        public override string ToString()
        {
            return string.Format("Agent: {0}, Department: {1}, Connection status: {2}",
                Id, UtsaDepartment, Connected);
        }
    }
}