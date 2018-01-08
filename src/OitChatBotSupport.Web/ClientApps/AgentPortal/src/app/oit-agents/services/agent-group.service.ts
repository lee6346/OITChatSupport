import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Agent } from '../models';
import { AgentHubGateway } from '../../core/agent.hub.gateway';

@Injectable()
export class AgentGroupService {

    private loadAgentsApi: string = 'http://localhost:5000/api/agent/members';

    constructor(
        private http: HttpClient,
        private agentHubGateway: AgentHubGateway
    ) { }

    join(agent: Agent): void {
        this.agentHubGateway.leaveGroup(agent);
    }

    leave(agent: Agent): void {
        this.agentHubGateway.joinGroup(agent);
    }

    getAgents$(): Observable<Agent[]> {
        return this.http.get<Agent[]>(this.loadAgentsApi);
    }
}