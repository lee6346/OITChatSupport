import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Agent } from '../model';
import { AgentGroupGateway } from '../gateway/agent-group.gateway';
import { AgentHubGateway } from '../gateway/agent.hub.gateway';

@Injectable()
export class AgentGroupService {

    constructor(
        private agentGroupGateway: AgentGroupGateway,
        private agentHubGateway: AgentHubGateway
    ) { }

    getAgentGroup$(agentId: string): Observable<Agent[]> {
        return this.agentGroupGateway.getAgents$(agentId);
    }

    join(agent: Agent): void {
        this.agentHubGateway.leaveGroup(agent);
    }

    leave(agent: Agent): void {
        this.agentHubGateway.joinGroup(agent);
    }

    
}