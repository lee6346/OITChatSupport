using OITChatBotSupport.Domain.AgentSupport;
using OITChatBotSupport.Domain.DirectLineChat;
using System;
using System.Collections.Generic;

namespace OITChatBotSupport.Unit.Repositories
{
    public class InMemorySqlServer
    {
        private readonly List<Agent> AgentTable = new List<Agent>();
        private readonly List<AgentTransfer> AgentTransferTable = new List<AgentTransfer>();
        private readonly List<GroupMessage> GroupMessageTable = new List<GroupMessage>();
        private readonly List<ConversationThread> ConversationThreadTable = new List<ConversationThread>();
        private readonly List<ConversationMessage> ConversationMessageTable = new List<ConversationMessage>();

        public InMemorySqlServer()
        {
            AgentTable.Add(new Agent("jvr632", true));
            AgentTable.Add(new Agent("ddr123", false));
            AgentTransferTable.Add(new AgentTransfer("ksjioeioah33w", "AskRowdy", "Help with printer", DateTimeOffset.UtcNow, "waiting", null));
            AgentTransferTable.Add(new AgentTransfer("ksjio34343ahw", "AskRowdy", "Help with library", DateTimeOffset.UtcNow.AddMinutes(-30), "cancelled", null));
            AgentTransferTable.Add(new AgentTransfer("cmkio1111111w", "AskRowdy", "Help with printer", DateTimeOffset.UtcNow.AddHours(-1), "accepted", "jvr632"));
            GroupMessageTable.Add(new GroupMessage("jvr632", "hello world", DateTimeOffset.UtcNow));
            GroupMessageTable.Add(new GroupMessage("jvr632", "hello world", DateTimeOffset.UtcNow.AddMinutes(-5)));
            ConversationThreadTable.Add(new ConversationThread("ksjio34343ahw", DateTimeOffset.UtcNow));
            ConversationThreadTable.Add(new ConversationThread("ksjiojspw3ahw", DateTimeOffset.UtcNow.AddHours(-1)));
            ConversationMessageTable.Add(new ConversationMessage(1, "ksjio34343ahw", "help me", "student", DateTimeOffset.UtcNow.AddMinutes(-10)));
            ConversationMessageTable.Add(new ConversationMessage(2, "ksjio34343ahw", "what do you need help with", "AskRowdy", DateTimeOffset.UtcNow.AddMinutes(-9)));
        }

    }
}
