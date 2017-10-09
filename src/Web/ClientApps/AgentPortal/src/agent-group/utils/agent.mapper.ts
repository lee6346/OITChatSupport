import { memoize } from '@types/lodash';
import { Agent } from '../../shared/model/agent.model';
import { AgentVm } from '../models/agent.vm';


export function agentsToAgentVm(threads: {}, agents: Agent[]) {
    return agents.map(agent => {
        const threadId = 3;
        return agentToAgentVm(threadId, agent)
    });
}

export const agentToAgentVm = memoize((threads: number, agent: Agent): AgentVm => {
    return {
        agentId: agent.agentId,
        agentName: 'test',
        connected: agent.connected,
        timeStamp: agent.timeStamp,
        threads: threads
    };
},
    (threads: number, agent: Agent) => agent.agentId + threads
);