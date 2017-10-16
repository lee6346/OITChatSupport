using System;
using System.Linq;
using Web.Data.Context;
using Web.Models;

namespace Web.Data
{
    public static class DataInitializer
    {
        public static void Initialize(OitChatSupportContext context)
        {
            context.Database.EnsureCreated();

            if (context.Agents.Any() || context.LiveRequests.Any() || 
                context.DirectLineThreads.Any() )
                //|| context.EventLogs.Any() || context.AgentGroupMessages.Any())
            {
                return;
            }

            var agents = new Agent[]
            {
                new Agent{UtsaId="jvr632", Connected=true, BotHandle="AskRowdy"},
                new Agent{UtsaId="llc332", Connected=false, BotHandle="AskRowdy"},
                new Agent{UtsaId="rrt111", Connected=true, BotHandle="AskRowdy"},
                new Agent{UtsaId="kkr333", Connected=true, BotHandle="Library"}
            };
            foreach (Agent agent in agents)
            {
                context.Agents.Add(agent);
            }
            context.SaveChanges();


            var threads = new DirectLineThread[]
            {
                new DirectLineThread{ConversationId="120skdls", BotHandle="AskRowdy", TimeCreated=DateTime.UtcNow},
                new DirectLineThread{ConversationId="111skdls", BotHandle="AskRowdy", TimeCreated=DateTime.UtcNow.AddDays(-3)},
                new DirectLineThread{ConversationId="120sasls", BotHandle="Library", TimeCreated=DateTime.UtcNow}
            };
            foreach (DirectLineThread thread in threads)
            {
                context.DirectLineThreads.Add(thread);
            }
            context.SaveChanges();
            

            var liveRequests = new LiveRequest[]
            {
                new LiveRequest{ConversationId="111skdls", BotHandle="AskRowdy", RequestTime=DateTime.UtcNow},
                new LiveRequest{ConversationId="144skdls", BotHandle="AskRowdy", RequestTime=DateTime.UtcNow.AddMinutes(-20)},
                new LiveRequest{ConversationId="111skdls", BotHandle="AskRowdy", RequestTime=DateTime.UtcNow.AddDays(1), AgentId="jvr632", AcceptTime=DateTime.UtcNow.AddDays(1).AddMinutes(3)},
            };

            foreach(LiveRequest request in liveRequests)
            {
                context.LiveRequests.Add(request);
            }
            context.SaveChanges();
            /*
            var logs = new EventLog[]
            {
                new EventLog{EventType="Security", Detail="Multiple attempts to access agent portal", Resolved=false},
                new EventLog{EventType="Server Error", Detail="Failed to retrieve direct line token", Resolved=true, Timestamp=DateTime.UtcNow}
            };

            foreach(EventLog log in logs)
            {
                context.EventLogs.Add(log);
            }
            context.SaveChanges();

            var agentMessages = new AgentGroupMessage[]
            {
                new AgentGroupMessage{UtsaDepartment="PrintSpot", Sender="jvr632", Text="bob help me with this student", TimeSent=DateTime.UtcNow}
            };
            foreach(AgentGroupMessage message in agentMessages)
            {
                context.AgentGroupMessages.Add(message);
            }
            context.SaveChanges();

    */
        }
    }
}