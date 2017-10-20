import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Agent } from '../../agent-group/models/agent.model';
import { AgentHubGateway } from './agent.hub.gateway';
import { environment } from '../../../environments/environment';

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

    authorize(value: string): HttpHeaders {
        return new HttpHeaders().set('Authorization', value);
    }

    sendErrorReport(errorMessage: string): void {
        this.http.post<Response>(environment.baseWebUrl +
            environment.error, errorMessage)
            .retry(1)
            .subscribe(
            res => console.log('successfully sent'),
            err => console.error('error posting the error report'),
            () => console.log('completed')
        );
    }
}