using System;
using Web.Models.Common;

namespace Web.Models
{
    public class LiveRequest: Entity
    {
        public string ConversationId { get; set; }
        public string BotHandle { get; set; }
        public DateTime RequestTime { get; set; }
        public string AgentId { get; set; }
        public DateTime? AcceptTime { get; set; }

        public override string ToString()
        {
            if (ReferenceEquals(AgentId, null))
                return string.Format("Thread: {0}, Bot: {1}, Request Time: {2}, Unresolved", ConversationId, BotHandle, RequestTime);
            else
                return string.Format("Thread: {0}, Bot: {1}, Request Time: {2}, Assisting agent: {3}, Accept time: {4}",
                    ConversationId, BotHandle, RequestTime, AgentId, AcceptTime);
        }
    }
}
