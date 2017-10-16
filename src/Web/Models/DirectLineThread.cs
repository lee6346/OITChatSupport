using System;
using Web.Models.Common;

namespace Web.Models
{
    public class DirectLineThread : Entity
    {
        public string ConversationId { get; set; }
        public string BotHandle { get; set; }
        public DateTime TimeCreated { get; set; }

        public override string ToString()
        {
            return string.Format("Thead Id: {0}, Time Created: {1}", ConversationId, TimeCreated);
        }
    }
}