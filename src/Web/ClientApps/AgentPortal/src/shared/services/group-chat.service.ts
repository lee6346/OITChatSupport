import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgentMessage } from '../../agent-group/models/agent-message.model';
import { AgentHubGateway } from './agent.hub.gateway';
import { environment } from '../../../environments/environment';

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