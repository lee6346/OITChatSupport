using System.Collections.Generic;
using System.Threading.Tasks;
using OITChatSupport.Infrastructure.Data.Repositories;
using OITChatSupport.Application.RealTimeRPC;
using OITChatSupport.Application.Dtos;

namespace OITChatSupport.Application.Services
{
    public class AccountService: IAccountService
    {
        private readonly IAgentRepository _agentRepository;
        private readonly IAgentHubTracker _agentHubTracker;

        public AccountService(IAgentRepository agentRepository, IAgentHubTracker agentHubTracker)
        {
            _agentHubTracker = agentHubTracker;
            _agentRepository = agentRepository;
        }

        public async Task<bool> AuthorizeAgent(AccountDto account)
        {
            var agent = await _agentRepository.GetByIdAsync(account.UtsaId);
            if(agent != null)
            {
                agent.Connected = true;
                await _agentRepository.UpdateAsync(agent);
                return true;
            }
            return false;
        }

        public async Task DisconnectAgent(AgentDto agent)
        {
            await _agentRepository.UpdateAsync(agent);
            await _agentHubTracker.RemoveAgent(agent);
        }

        public async Task<IList<AgentDto>> RetrieveGroupAgents()
        {
            return await _agentRepository.GetAllAsync(false);
        }
    }
}
