using System;
using Web.Models.Common;

namespace Web.Models
{

    public class GroupMessage : Entity
    {
        public string Sender { get; set; }
        public DateTime TimeSent { get; set; }
        public string Text { get; set; }
        public string Group { get; set; }

        public override string ToString()
        {
            return string.Format("Department: {0}, Sender: {1}, Time: {2}, Text: {3}",
                Group, Sender, TimeSent, Text);
        }
    }
}