using OITChatBotSupport.Domain.AgentSupport;
using OITChatBotSupport.Infrastructure.Data.Sql;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OITChatBotSupport.Infrastructure.Data.Repositories
{
    public class AgentTransferRepository: SqlRepository<AgentTransfer>, IAgentTransferRepository
    {

        public AgentTransferRepository(ISqlConnectionFactory connectionFactory)
            :base(connectionFactory) { }


        public async Task AddNewRequestAsync(AgentTransfer agentTransfer)
        { 

            string sqlCommand = "INSERT INTO AgentTransfer (ConversationId,BotHandle,LastMessage,Requested,TransferStatus) VALUES" +
                "(@Id,@BotHandle,@LastMessage,@Requested,@TransferStatus)";
            var rowsAffected = await ExecuteAsync(sqlCommand, agentTransfer);
        }

        public async Task UpdateRequestStatusAsync(string requestId, string transferStatus, string assistingAgent=null)
        {
            string sqlCommand = "UPDATE AgentTransfer SET AssistingAgent=@AssistingAgent," +
                "TransferStatus=@TransferStatus WHERE ConversationId=@ConversationId";
            var rowsAffected = await ExecuteAsync(sqlCommand, new {AssistingAgent=assistingAgent,TransferStatus=transferStatus,ConversationId=requestId });
        }

        public async Task<IEnumerable<AgentTransfer>> GetWaitingRequestsAsync()
        {
            string sqlQuery = "SELECT ConversationId AS Id, BotHandle, LastMessage, Requested FROM AgentTransfer WHERE TransferStatus=@TransferStatus";
            var results = await GetAsync(sqlQuery, new {TransferStatus="Waiting" });
            return results;
        }
    }
}
