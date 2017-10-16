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

            if (context.Agents.Any() || context.Departments.Any() || 
                context.ChatBots.Any() || context.LiveRequests.Any() || 
                context.DirectLineThreads.Any() || context.DirectLineMessages.Any() ||
                context.EventLogs.Any() || context.AgentGroupMessages.Any())
            {
                return;
            }

            var agents = new Agent[]
            {
                new Agent{UtsaId="jvr632", Connected=true, UtsaDepartment="PrintSpot"},
                new Agent{UtsaId="llc332", Connected=false, UtsaDepartment="PrintSpot"},
                new Agent{UtsaId="rrt111", Connected=true, UtsaDepartment="PrintSpot"},
                new Agent{UtsaId="kkr333", Connected=true, UtsaDepartment="Library"}
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

            var directLineMessages = new DirectLineMessage[]
            {
                new DirectLineMessage{ConversationId="120skdls", Sender="Student", Text="Hello world", TimeSent=DateTime.UtcNow},
                new DirectLineMessage{ConversationId="120skdls", Sender="jvr632", Text="Hello", TimeSent=DateTime.UtcNow.AddSeconds(6)},
                new DirectLineMessage{ConversationId="120skdls", Sender="jvr632", Text="How may i help you", TimeSent=DateTime.UtcNow.AddSeconds(12)}
            };
            foreach(DirectLineMessage message in directLineMessages)
            {
                context.DirectLineMessages.Add(message);
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

            var departments = new Department[]
            {
                new Department{DepartmentId="LIB145", BotHandle="Library"},
                new Department{DepartmentId="OIT111", BotHandle="AskRowdy"}
            };
            foreach(Department department in departments)
            {
                context.Departments.Add(department);
            }
            context.SaveChanges();

            var bots = new ChatBot[]
            {
                new ChatBot{BotId="1112222", BotHandle="AskRowdy", UtsaDepartment="PrintSpot", Connected=true},
                new ChatBot{BotId="2222222", BotHandle="LibBot", UtsaDepartment="Library", Connected=false }
            };
            foreach(ChatBot bot in bots)
            {
                context.ChatBots.Add(bot);
            }
            context.SaveChanges();

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
        }
    }
}