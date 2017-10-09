import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Agent } from '../model/agent.model';
import { RestfulGateway } from './restful.gateway';

@Injectable()
export class AgentGroupGateway extends RestfulGateway{

    private agentGroupUrl: string = 'api/Agent/GetAgents';

    getAgents$(agentId: string): Observable<Agent[]> {
        return this.http.get(this.baseUrl + this.agentGroupUrl + '/' + agentId);
    }

}