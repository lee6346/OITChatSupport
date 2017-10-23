import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Agent } from '../agent-group/models';
import { AgentHubGateway } from './agent.hub.gateway';
import { environment } from '../../environments/environment';

@Injectable()
export class AgentGroupService {

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

    getAgents$(group: string): Observable<Agent[]> {
        return this.http.get<Agent[]>(
            environment.baseWebUrl +
            environment.agentGroup + '/' + group
        );
    }
}