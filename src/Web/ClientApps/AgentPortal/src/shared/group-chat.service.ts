import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AgentMessage } from '../agent-group/models';
import { AgentHubGateway } from './agent.hub.gateway';
import { environment } from '../../environments/environment';

@Injectable()
export class GroupChatService {

    constructor(
        private http: HttpClient,
        private agentHubGateway: AgentHubGateway,
    ) { }

    getMessages$(group: string): Observable<AgentMessage[]> {
        return this.http.get<AgentMessage[]>(
            environment.baseWebUrl +
            environment.groupMessages +
            '/' + group 
        );
    }

    sendGroupMessage(agentMessage: AgentMessage): void {
        this.agentHubGateway.send(agentMessage);
    }
}