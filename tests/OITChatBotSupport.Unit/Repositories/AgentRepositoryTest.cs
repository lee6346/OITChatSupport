using OITChatBotSupport.Domain.AgentSupport;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace OITChatBotSupport.Unit.Repositories
{
    public class AgentRepositoryTest
    {
        [Fact]
        public void Returns_Zero_Rows_Affected_For_No_UtsaId_Match()
        {
            IAgentRepository repo = GetInMemoryRepository();
            
        }
        
        private IAgentRepository GetInMemoryRepository()
        {
            return null;
        }
    }
}
